import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function SafetyScene({ sceneData, onSelect }) {
  const canvasRef = useRef(null);
  const objectsRef = useRef([]);

  useEffect(() => {
    if (!canvasRef.current || !sceneData) return undefined;
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x07101d, 1);
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x07101d, 22, 42);
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 15, 18);
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.target.set(0, 0, -1);
    controls.maxPolarAngle = Math.PI / 2.15;
    controls.minDistance = 10;
    controls.maxDistance = 32;
    scene.add(new THREE.HemisphereLight(0x9bdcff, 0x101827, 2.1));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(-8, 14, 10);
    scene.add(keyLight);

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 24), new THREE.MeshStandardMaterial({ color: 0x0b1728, roughness: 0.8 }));
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);
    const grid = new THREE.GridHelper(30, 30, 0x1e4c62, 0x143043);
    grid.position.y = 0.02;
    scene.add(grid);
    objectsRef.current = [];

    sceneData.zones.forEach(zone => {
      const color = new THREE.Color(zone.color);
      const zoneMaterial = new THREE.MeshStandardMaterial({ color, transparent: true, opacity: 0.18, roughness: 0.5, emissive: color, emissiveIntensity: 0.28 });
      const zoneMesh = new THREE.Mesh(new THREE.BoxGeometry(7, 0.5, 5.4), zoneMaterial);
      zoneMesh.position.set(zone.position.x, 0.25, zone.position.z);
      zoneMesh.userData = zone;
      scene.add(zoneMesh);
      objectsRef.current.push(zoneMesh);
      const outline = new THREE.LineSegments(new THREE.EdgesGeometry(zoneMesh.geometry), new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.8 }));
      outline.position.copy(zoneMesh.position);
      scene.add(outline);
      zone.machines.forEach(machine => {
        const machineColor = machine.status === 'CRITICAL' ? 0xef4444 : machine.status === 'WARNING' ? 0xf97316 : 0x22c55e;
        const machineMesh = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.3, 0.9), new THREE.MeshStandardMaterial({ color: machineColor, emissive: machineColor, emissiveIntensity: 0.55, metalness: 0.4, roughness: 0.35 }));
        machineMesh.position.set(machine.position.x, 0.9, machine.position.z);
        machineMesh.userData = { ...zone, selectedMachine: machine };
        scene.add(machineMesh);
        objectsRef.current.push(machineMesh);
      });
    });

    const resize = () => { const width = canvas.clientWidth; const height = canvas.clientHeight; renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); };
    resize();
    window.addEventListener('resize', resize);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const click = event => { const rect = canvas.getBoundingClientRect(); pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1; pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1; raycaster.setFromCamera(pointer, camera); const hit = raycaster.intersectObjects(objectsRef.current)[0]; if (hit) onSelect(hit.object.userData); };
    canvas.addEventListener('click', click);
    let frame;
    const animate = () => { controls.update(); renderer.render(scene, camera); frame = requestAnimationFrame(animate); };
    animate();
    return () => { cancelAnimationFrame(frame); canvas.removeEventListener('click', click); window.removeEventListener('resize', resize); controls.dispose(); renderer.dispose(); };
  }, [sceneData, onSelect]);

  return <canvas ref={canvasRef} className="safety-3d-canvas" aria-label="Interactive 3D facility safety map" />;
}

export default function Safety3DPage() {
  const [sceneData, setSceneData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => { fetch('/api/scene-3d').then(response => response.json()).then(setSceneData).catch(() => setError('3D safety service is unavailable. Start the backend and refresh.')); }, []);
  return <div className="p-6 space-y-5">
    <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[10px] tracking-[.18em] font-mono text-cyan-400">SPATIAL SAFETY COMMAND</p><h2 className="text-2xl font-black text-white mt-1">3D facility safety map</h2><p className="text-xs text-slate-400 mt-1">Green permits entry. Orange requires a check. Red means do not enter.</p></div><span className="text-[10px] font-mono text-slate-500">DRAG TO ORBIT · SCROLL TO ZOOM · CLICK A ZONE</span></div>
    {error && <div className="glass-panel p-4 text-rose-300">{error}</div>}
    <div className="safety-3d-layout"><div className="safety-3d-frame">{sceneData ? <SafetyScene sceneData={sceneData} onSelect={setSelected} /> : <div className="safety-3d-loading">Loading live facility geometry...</div>}<div className="safety-3d-overlay"><span>LIVE SENSOR OVERLAY</span><span className="safety-live-dot" /> CONNECTED</div></div>
      <aside className="safety-3d-panel glass-panel p-5"><p className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">ENTRY STATUS LEGEND</p>{sceneData?.legend.map(item => <div className="safety-legend-row" key={item.status}><span className="safety-legend-color" style={{ backgroundColor: item.color, boxShadow: `0 0 12px ${item.color}` }} /><div><strong>{item.status}</strong><p>{item.meaning}</p></div></div>)}<div className="safety-selection">{selected ? <><p className="text-[10px] text-cyan-400 font-mono">SELECTED {selected.selectedMachine ? 'ASSET' : 'ZONE'}</p><h3>{selected.selectedMachine?.name || selected.name}</h3><p>{selected.selectedMachine ? `${selected.selectedMachine.id} · ${selected.selectedMachine.status} · ${selected.selectedMachine.healthScore}% health` : `${selected.machineCount} machines · ${selected.ammoniaPpm} ppm ammonia · ${selected.health}% minimum health`}</p><span className={`safety-selection-status status-${selected.status.toLowerCase()}`}>{selected.status}</span></> : <p>Click a colored zone or machine to inspect its live safety state.</p>}</div></aside>
    </div>
  </div>;
}