"use client";

import { Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

type NodeData = {
  position: [number, number, number];
  speed: number;
};

function NetworkGraph() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo<NodeData[]>(
    () =>
      new Array(24).fill(null).map((_, idx) => ({
        position: [
          (Math.sin(idx * 2.1) * 2.8) as number,
          (Math.cos(idx * 1.3) * 1.8) as number,
          (Math.sin(idx * 0.7) * 1.6) as number,
        ],
        speed: 0.18 + idx * 0.008,
      })),
    [],
  );

  useFrame(({ mouse, clock, camera }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.08;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.35) * 0.08;

    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (mouse.y * 0.35 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      {nodes.map((node, index) => {
        const phase = Math.sin(index + performance.now() * 0.0002 * node.speed) * 0.08;
        return (
          <mesh
            key={index}
            position={[node.position[0] + phase, node.position[1] - phase, node.position[2]]}
          >
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#8bd8ff" emissive="#0f5f82" emissiveIntensity={0.9} />
          </mesh>
        );
      })}

      {nodes.slice(1).map((node, index) => {
        const prev = nodes[index].position;
        return (
          <Line
            key={`line-${index}`}
            points={[prev, node.position]}
            color="#2563eb"
            transparent
            opacity={0.35}
            lineWidth={0.6}
          />
        );
      })}
    </group>
  );
}

export default function HeroNetworkScene() {
  return (
    <Canvas camera={{ position: [0, 0.4, 5.2], fov: 50 }} dpr={[1, 1.5]}>
      <color attach="background" args={["#04050d"]} />
      <ambientLight intensity={0.65} />
      <pointLight position={[2, 2, 3]} intensity={10} color="#5cbef7" />
      <pointLight position={[-3, -2, -1]} intensity={5} color="#7c3aed" />
      <NetworkGraph />
    </Canvas>
  );
}
