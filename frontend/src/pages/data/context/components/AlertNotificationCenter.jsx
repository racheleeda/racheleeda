import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../AppContext.jsx';

export default function AlertNotificationCenter() {
  const { alerts } = useApp();
  const seenAlerts = useRef(new Set(alerts.map(alert => alert.id)));
  const [phoneAlerts, setPhoneAlerts] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const [sirenSeconds, setSirenSeconds] = useState(0);
  const audioRef = useRef(null);
  const sirenRef = useRef(null);
  const sirenTimerRef = useRef(null);

  const stopSiren = () => {
    if (sirenRef.current) sirenRef.current.forEach(node => node.stop());
    if (sirenTimerRef.current) window.clearInterval(sirenTimerRef.current);
    sirenRef.current = null;
    sirenTimerRef.current = null;
    setSirenSeconds(0);
  };

  const startEmergencySiren = () => {
    stopSiren();
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const audio = audioRef.current || new AudioContext();
    audioRef.current = audio;
    audio.resume();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = 'square';
    oscillator.frequency.value = 980;
    gain.gain.value = 0.42;
    oscillator.connect(gain).connect(audio.destination);
    oscillator.start();
    sirenRef.current = [oscillator];
    let high = true;
    let remaining = 60;
    setSirenSeconds(remaining);
    sirenTimerRef.current = window.setInterval(() => {
      remaining -= 1;
      setSirenSeconds(remaining);
      high = !high;
      oscillator.frequency.setValueAtTime(high ? 980 : 560, audio.currentTime);
      if (remaining <= 0) stopSiren();
    }, 1000);
  };

  const enableNotifications = async () => {
    if ('Notification' in window && Notification.permission === 'default') await Notification.requestPermission();
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioRef.current = audioRef.current || new AudioContext();
      await audioRef.current.resume();
    }
    setEnabled(true);
  };

  useEffect(() => () => stopSiren(), []);

  useEffect(() => {
    const freshAlerts = alerts.filter(alert => alert.status === 'ACTIVE' && !seenAlerts.current.has(alert.id));
    if (!freshAlerts.length) return;
    freshAlerts.forEach(alert => {
      seenAlerts.current.add(alert.id);
      if (alert.severity === 'WARNING' || alert.severity === 'CRITICAL') {
        if (alert.severity === 'CRITICAL' && enabled) startEmergencySiren();
        if (navigator.vibrate) navigator.vibrate(alert.severity === 'CRITICAL' ? [500, 150, 500, 150, 900] : [180, 100, 180]);
        if (enabled && 'Notification' in window && Notification.permission === 'granted') {
          new Notification(`${alert.severity}: ${alert.alertType}`, { body: `${alert.machineId} · ${alert.currentValue}`, tag: alert.id });
        }
        setPhoneAlerts(current => [{ ...alert, deliveredAt: new Date().toLocaleTimeString() }, ...current].slice(0, 4));
      }
    });
  }, [alerts, enabled]);

  const latest = phoneAlerts[0];
  return (
    <aside className="mobile-alert-center">
      <div className="mobile-alert-heading">
        <div><p className="mobile-alert-eyebrow">MOBILE ALERTING</p><h3>Operator phone channel</h3></div>
        <span className="mobile-signal"><i /> LIVE</span>
      </div>
      {sirenSeconds > 0 && <div className="emergency-siren-banner"><span className="siren-light" /><div><strong>EMERGENCY SIREN ACTIVE</strong><small>Full-volume alarm · {sirenSeconds}s remaining</small></div><button type="button" onClick={stopSiren}>STOP</button></div>}
      <div className="mobile-alert-device">
        <div className="mobile-device-notch" />
        <div className="mobile-device-screen">
          <div className="mobile-device-bar"><span>09:41</span><span>▮▮▮ 100%</span></div>
          {latest ? <><p className="mobile-alert-app">AI SMART RETROFIT <span>{latest.severity}</span></p><strong>{latest.alertType}</strong><p>{latest.machineId} · {latest.zone}</p><div className="mobile-alert-reading">{latest.currentValue}</div><small>Recommended: {latest.aiRecommendation}</small></> : <><p className="mobile-alert-app">AI SMART RETROFIT</p><strong>Phone alerts are armed</strong><p>New risk events will appear here with sound and vibration.</p><div className="mobile-alert-reading mobile-ready">READY TO RECEIVE</div></>}
        </div>
      </div>
      <div className="mobile-alert-footer"><span>{phoneAlerts.length ? `${phoneAlerts.length} recent phone alert${phoneAlerts.length === 1 ? '' : 's'}` : 'No new phone alerts'}</span><button type="button" onClick={enableNotifications}>{enabled ? 'SIREN ARMED' : 'ARM SIREN + ALERTS'}</button></div>
    </aside>
  );
}