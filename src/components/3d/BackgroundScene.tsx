"use client";

import { Float, Icosahedron, Points, PointMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";

export default function BackgroundScene() {
  const points = useMemo(() => {
    return new Float32Array(
      Array.from({ length: 500 * 3 }, (_, i) => {
        const axis = i % 3;
        return (Math.random() - 0.5) * (axis === 2 ? 14 : 18);
      }),
    );
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 8] }} dpr={[1, 1.4]}>
      <fog attach="fog" args={["#05070f", 8, 20]} />
      <Points positions={points} stride={3} frustumCulled>
        <PointMaterial transparent color="#4f8db8" size={0.018} sizeAttenuation depthWrite={false} />
      </Points>

      <Float speed={1.1} rotationIntensity={0.9} floatIntensity={0.8}>
        <Icosahedron args={[0.45, 0]} position={[-3.4, 1.8, -2]}>
          <meshStandardMaterial color="#223252" wireframe opacity={0.4} transparent />
        </Icosahedron>
      </Float>
      <Float speed={1.3} rotationIntensity={1.2} floatIntensity={0.9}>
        <Icosahedron args={[0.35, 0]} position={[3.6, -1.2, -3]}>
          <meshStandardMaterial color="#2e2c5f" wireframe opacity={0.4} transparent />
        </Icosahedron>
      </Float>
      <ambientLight intensity={0.4} />
    </Canvas>
  );
}
