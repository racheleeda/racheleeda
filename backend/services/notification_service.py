import base64
import json
import os
from datetime import datetime
from urllib import error, parse, request


def _recipients():
    return [number.strip() for number in os.environ.get("ALERT_SMS_RECIPIENTS", "").split(",") if number.strip()]


def _message_for(alert):
    return (
        f"[{alert.get('severity', 'WARNING')}] AI Smart Retrofit: {alert.get('alertType', 'Industrial alert')} "
        f"on {alert.get('machineId', 'unknown machine')} ({alert.get('zone', 'unknown zone')}). "
        f"Reading: {alert.get('currentValue', 'n/a')}. Action: {alert.get('aiRecommendation', 'Inspect immediately.')}"
    )


def _send_twilio(message, recipient):
    account_sid = os.environ.get("TWILIO_ACCOUNT_SID")
    auth_token = os.environ.get("TWILIO_AUTH_TOKEN")
    from_number = os.environ.get("TWILIO_FROM_NUMBER")
    if not all((account_sid, auth_token, from_number)):
        return {"status": "DEMO", "detail": "SMS provider is not configured"}
    endpoint = f"https://api.twilio.com/2010-04-01/Accounts/{account_sid}/Messages.json"
    body = parse.urlencode({"To": recipient, "From": from_number, "Body": message}).encode()
    token = base64.b64encode(f"{account_sid}:{auth_token}".encode()).decode()
    req = request.Request(endpoint, data=body, headers={"Authorization": f"Basic {token}"})
    try:
        with request.urlopen(req, timeout=8) as response:
            return {"status": "SENT", "detail": json.loads(response.read().decode()).get("sid", "Accepted")}
    except (error.URLError, TimeoutError, ValueError, json.JSONDecodeError) as exc:
        return {"status": "FAILED", "detail": str(exc)}


def dispatch_alert(alert, store):
    if alert.get("severity") not in ("WARNING", "CRITICAL"):
        return {"status": "SKIPPED", "reason": "Only warning and critical alerts notify phones"}
    recipients = _recipients()
    deliveries = []
    if recipients:
        for recipient in recipients:
            deliveries.append({"recipient": recipient, **_send_twilio(_message_for(alert), recipient)})
    else:
        deliveries.append({"recipient": "Demo phone", "status": "DEMO", "detail": "Set ALERT_SMS_RECIPIENTS for real SMS"})
    notification = {
        "id": f"NTF-{datetime.utcnow().strftime('%Y%m%d%H%M%S%f')[:-3]}",
        "alertId": alert.get("id"), "severity": alert.get("severity"),
        "alertType": alert.get("alertType"), "machineId": alert.get("machineId"),
        "message": _message_for(alert), "deliveries": deliveries,
        "alertChannel": "EMERGENCY_SIREN" if alert.get("severity") == "CRITICAL" else "WARNING_TONE",
        "sound": "emergency-siren" if alert.get("severity") == "CRITICAL" else "warning-tone",
        "soundDurationSeconds": 60 if alert.get("severity") == "CRITICAL" else 8,
        "vibrationPattern": [500, 150, 500, 150, 900] if alert.get("severity") == "CRITICAL" else [180, 100, 180],
        "requiresImmediateAction": alert.get("severity") == "CRITICAL",
        "createdAt": datetime.utcnow().isoformat() + "Z",
    }
    store.add_notification(notification)
    return notification