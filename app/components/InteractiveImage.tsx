// app/components/InteractiveImage.tsx
"use client";

import { useRef, useState, useEffect } from "react"; // Tambahkan useEffect
import { useFrame, useLoader, RootState } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";

type InteractiveImageProps = {
  imageUrl: string;
  size?: [width: number, height: number];
};

export default function InteractiveImage({
  imageUrl,
  size = [8, 13.31],
}: InteractiveImageProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setHovered] = useState(false);

  const texture = useLoader(THREE.TextureLoader, imageUrl);

  // --- PERUBAHAN DI SINI ---
  // Gunakan useEffect untuk mengatur properti tekstur setelah dimuat
  useEffect(() => {
    if (texture) {
      // Mencegah tekstur melipat atau mengulang di tepinya
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;

      // Mengoptimalkan rendering untuk gambar non-power-of-two
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      // Memberitahu three.js untuk memperbarui tekstur
      texture.needsUpdate = true;
    }
  }, [texture]);
  // --- AKHIR PERUBAHAN ---

  useFrame((state: RootState) => {
    if (meshRef.current) {
      const { x, y } = state.pointer;
      if (isHovered) {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          x * 0.25,
          0.1
        );
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          -y * 0.25,
          0.1
        );
      } else {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          0,
          0.05
        );
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          0,
          0.05
        );
      }
    }
  });

  return (
    <Plane
      ref={meshRef}
      args={size}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={isHovered ? 1.1 : 1}
    >
      <meshStandardMaterial
        map={texture}
        toneMapped={false}
        transparent={true}
        alphaTest={0.1}
      />
    </Plane>
  );
}
