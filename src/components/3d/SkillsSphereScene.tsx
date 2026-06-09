"use client";

import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type * as THREE from "three";

function RotatingSphere({ tags }: { tags: string[] }) {
  const group = useRef<THREE.Group>(null);
  const [dragging, setDragging] = useState(false);
  const rotation = useRef({ x: 0.2, y: 0.2 });

  const points = useMemo(() => {
    return tags.map((tag, idx) => {
      const phi = Math.acos(1 - (2 * (idx + 0.5)) / tags.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (idx + 0.5);
      const radius = 1.7;
      return {
        tag,
        position: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ] as [number, number, number],
      };
    });
  }, [tags]);

  useFrame(({ pointer }) => {
    if (!group.current) return;
    if (dragging) {
      rotation.current.y += pointer.x * 0.03;
      rotation.current.x += pointer.y * 0.02;
    } else {
      rotation.current.y += 0.003;
    }
    group.current.rotation.y = rotation.current.y;
    group.current.rotation.x = rotation.current.x;
  });

  return (
    <group
      ref={group}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
    >
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#12203a" wireframe opacity={0.2} transparent />
      </mesh>
      {points.map(({ tag, position }) => (
        <Html key={tag} position={position} center>
          <span className="rounded-full border border-white/20 bg-[#0b1223]/80 px-3 py-1 text-xs text-cyan-100 backdrop-blur">
            {tag}
          </span>
        </Html>
      ))}
    </group>
  );
}

export default function SkillsSphereScene({ tags }: { tags: string[] }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 48 }} dpr={[1, 1.6]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 3, 3]} intensity={1.3} color="#67e8f9" />
      <RotatingSphere tags={tags} />
    </Canvas>
  );
}
