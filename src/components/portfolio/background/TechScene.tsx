import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, MeshDistortMaterial } from "@react-three/drei";

import { useRef } from "react";
import type { Mesh } from "three";

import { useReducedMotion } from "../../../hooks/useReducedMotion";

function TechCoreMesh() {
  const meshRef = useRef<Mesh>(null);
  const reducedMotion = useReducedMotion();

  useFrame((_, delta) => {
    if (!meshRef.current || reducedMotion) {
      return;
    }

    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={reducedMotion ? 0 : 1.2} rotationIntensity={reducedMotion ? 0 : 0.25} floatIntensity={reducedMotion ? 0 : 0.35}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.35, 4]} />

        <MeshDistortMaterial color="#ffffff" roughness={0.35} metalness={0.7} distort={0.18} speed={reducedMotion ? 0 : 1.2} />
      </mesh>
    </Float>
  );
}

export function TechScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-[1]
        opacity-30
      "
    >
      <Canvas
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? "demand" : "always"}
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >
        <ambientLight intensity={0.8} />

        <directionalLight position={[3, 3, 4]} intensity={2} />

        <TechCoreMesh />

        <ContactShadows position={[0, -1.5, 0]} opacity={0.25} scale={8} blur={2} far={4} />
      </Canvas>
    </div>
  );
}
