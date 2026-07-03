import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function WavePlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const g = new THREE.PlaneGeometry(30, 30, 80, 80);
    return g;
  }, []);
  const originalPositions = useMemo(() => {
    return Float32Array.from(geometry.attributes.position.array);
  }, [geometry]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    const pos = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = originalPositions[i * 3];
      const y = originalPositions[i * 3 + 1];
      const z =
        Math.sin(x * 0.4 + t * 0.9) * 0.35 +
        Math.cos(y * 0.35 + t * 0.7) * 0.35;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-Math.PI / 2.3, 0, 0]}
      position={[0, -2, 0]}
    >
      <meshStandardMaterial
        color="#1e4d8c"
        metalness={0.7}
        roughness={0.25}
        emissive="#0a1836"
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

function GoldOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.3;
    ref.current.rotation.x = clock.getElapsedTime() * 0.15;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} position={[1.5, 0.8, 0]}>
        <torusKnotGeometry args={[0.9, 0.28, 180, 24]} />
        <meshStandardMaterial
          color="#d4b878"
          metalness={1}
          roughness={0.15}
          emissive="#8a6a2a"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function Bubbles() {
  const group = useRef<THREE.Group>(null);
  const bubbles = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        x: (Math.random() - 0.5) * 14,
        y: Math.random() * 8 - 3,
        z: (Math.random() - 0.5) * 8,
        s: 0.05 + Math.random() * 0.15,
        speed: 0.2 + Math.random() * 0.4,
      })),
    [],
  );
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.children.forEach((child, i) => {
      const b = bubbles[i];
      child.position.y = ((b.y + t * b.speed) % 8) - 3;
    });
  });
  return (
    <group ref={group}>
      {bubbles.map((b, i) => (
        <mesh key={i} position={[b.x, b.y, b.z]}>
          <sphereGeometry args={[b.s, 12, 12]} />
          <meshStandardMaterial
            color="#8fc3ff"
            transparent
            opacity={0.35}
            emissive="#4da6ff"
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export function OceanScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 6], fov: 55 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#d4b878" />
      <pointLight position={[-4, 2, -2]} intensity={2} color="#4da6ff" />
      <WavePlane />
      <GoldOrb />
      <Bubbles />
      <Environment preset="night" />
      <fog attach="fog" args={["#050d1f", 8, 20]} />
    </Canvas>
  );
}
