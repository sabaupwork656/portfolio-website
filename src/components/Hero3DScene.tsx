import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function isSmallScreen() {
  return window.matchMedia('(max-width: 767px)').matches;
}

export default function Hero3DScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;
    const mobile = isSmallScreen();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: !mobile, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.25 : 1.75));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const coreGeometry = new THREE.IcosahedronGeometry(1.35, mobile ? 1 : 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.32,
      metalness: 0.42,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.18,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const cubeGeometry = new THREE.BoxGeometry(0.34, 0.34, 0.34);
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      roughness: 0.36,
      metalness: 0.35,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.25,
    });

    const orbiters: THREE.Mesh[] = [];
    const orbiterCount = mobile ? 4 : 7;
    for (let index = 0; index < orbiterCount; index += 1) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      const angle = (index / orbiterCount) * Math.PI * 2;
      cube.position.set(Math.cos(angle) * 2.25, Math.sin(angle * 1.4) * 0.7, Math.sin(angle) * 2.25);
      cube.rotation.set(angle, angle * 0.5, angle * 0.25);
      orbiters.push(cube);
      group.add(cube);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = mobile ? 42 : 90;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 6.5;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 4.2;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 5.4;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: mobile ? 0.025 : 0.035,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0x9bdcff, 0.55));
    const keyLight = new THREE.PointLight(0x38bdf8, 3.2, 10);
    keyLight.position.set(2.8, 2.8, 3.2);
    scene.add(keyLight);
    const violetLight = new THREE.PointLight(0xc084fc, 2.4, 8);
    violetLight.position.set(-3, -1.5, 2);
    scene.add(violetLight);

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener('pointermove', onPointerMove);

    const onResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    let animationFrame = 0;
    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      mouse.x += (target.x - mouse.x) * 0.08;
      mouse.y += (target.y - mouse.y) * 0.08;

      group.rotation.y += 0.006;
      group.rotation.x = mouse.y * 0.25;
      group.rotation.z = mouse.x * 0.12;
      core.rotation.x += 0.004;
      core.rotation.y += 0.007;
      particles.rotation.y -= 0.0018;

      orbiters.forEach((cube, index) => {
        const angle = Date.now() * 0.00045 + index;
        cube.position.y += Math.sin(angle) * 0.002;
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.008;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', onResize);
      mount.removeEventListener('pointermove', onPointerMove);
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      cubeGeometry.dispose();
      cubeMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40 shadow-soft md:min-h-[520px]">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.16),transparent_48%),linear-gradient(180deg,transparent,rgba(2,6,23,0.28))]" />
    </div>
  );
}
