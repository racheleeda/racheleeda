from backend.database.store import db_store


STATUS_COLORS = {
    "SAFE": "#22c55e",
    "WARNING": "#f97316",
    "CRITICAL": "#ef4444",
}


def _zone_status(machines):
    max_ammonia = max((machine["latestSensors"].get("ammonia", 0) for machine in machines), default=0)
    if any(machine.get("status") == "CRITICAL" for machine in machines) or max_ammonia > 50:
        return "CRITICAL"
    if any(machine.get("status") == "WARNING" for machine in machines) or max_ammonia > 25:
        return "WARNING"
    return "SAFE"


def get_3d_scene():
    machines = db_store.get_all_machines()
    zones = db_store.get_zones()
    machines_by_zone = {}
    for machine in machines:
        machines_by_zone.setdefault(machine.get("zone", "ZONE A"), []).append(machine)

    zone_positions = {
        "ZONE A": (-7, 2), "ZONE B": (1, 2), "ZONE C": (-7, -5), "ZONE D": (1, -5)
    }
    scene_zones = []
    for index, zone in enumerate(zones):
        zone_code = zone.get("zoneId", "ZONE_A").replace("_", " ").upper()
        zone_machines = machines_by_zone.get(zone_code, [])
        status = _zone_status(zone_machines)
        x, z = zone_positions.get(zone_code, ((index % 2) * 8 - 7, (index // 2) * -7 + 2))
        scene_zones.append({
            "id": zone.get("zoneId", zone_code),
            "name": zone.get("zoneName", zone_code),
            "shortName": zone_code,
            "status": status,
            "color": STATUS_COLORS[status],
            "machineCount": len(zone_machines),
            "ammoniaPpm": max((machine["latestSensors"].get("ammonia", 0) for machine in zone_machines), default=zone.get("ammoniaPpm", 0)),
            "health": min((machine.get("healthScore", 100) for machine in zone_machines), default=zone.get("machineHealth", 100)),
            "position": {"x": x, "z": z},
            "machines": [{
                "id": machine["id"], "name": machine["name"], "status": machine["status"],
                "healthScore": machine["healthScore"], "position": {"x": x + (machine_index % 3) * 1.8 - 1.8, "z": z + (machine_index // 3) * 1.7 - 0.8},
            } for machine_index, machine in enumerate(zone_machines)],
        })

    return {
        "legend": [{"status": status, "color": color, "meaning": meaning} for status, color, meaning in (("SAFE", "#22c55e", "Entry permitted"), ("WARNING", "#f97316", "Check conditions before entry"), ("CRITICAL", "#ef4444", "Do not enter / evacuate"))],
        "zones": scene_zones,
        "camera": {"x": 0, "y": 15, "z": 18},
    }