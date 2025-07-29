"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame, useLoader, RootState } from "@react-three/fiber";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import * as THREE from "three";

type AnimatedSVGObjectProps = {
  url: string;
  color?: string;
  hoverColor?: string;
};

type SVGExtrudedShape = {
  shape: THREE.Shape;
  geometry: THREE.ExtrudeGeometry;
};

export default function AnimatedSVGObject({
  url,
  color = "#FFFFFF",
  hoverColor = "#a9a9a9",
}: AnimatedSVGObjectProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setHovered] = useState(false);

  const { paths } = useLoader(SVGLoader, url);

  const shapes = useMemo((): SVGExtrudedShape[] => {
    return paths.flatMap((path: THREE.ShapePath) => {
      const generatedShapes = path.toShapes(true);
      return generatedShapes.map((shape: THREE.Shape) => {
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 10,
          bevelEnabled: false,
        });
        geometry.center();
        return { shape, geometry };
      });
    });
  }, [paths]);

  useFrame((state: RootState) => {
    if (groupRef.current) {
      const { x, y } = state.pointer;
      if (isHovered) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          x * 0.5,
          0.1
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          -y * 0.5,
          0.1
        );
      } else {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          0,
          0.05
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          0,
          0.05
        );
      }
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={0.015}
    >
      {shapes.map(({ geometry }: SVGExtrudedShape, index: number) => (
        <mesh key={index} geometry={geometry}>
          <meshStandardMaterial color={isHovered ? hoverColor : color} />
        </mesh>
      ))}
    </group>
  );
}
