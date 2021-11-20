import { useRef, useState } from "react";
import { AxesHelper } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html, useHelper } from "@react-three/drei";

import styles from "./styles.module.scss";
import { Card } from "components";

export const FullDenture = ({ ...props }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false);
  const group = useRef();
	const upperJaw = useRef();
	const lowerJaw = useRef();
  useHelper(group, AxesHelper, "red");
  const { nodes, materials } = useGLTF("/gltf/FullDenture.gltf");

  useFrame((state, delta) => {
    if (!isMouseInCanvas) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, 0, 0]}
      onPointerOver={() => setIsMouseInCanvas(true)}
      onPointerOut={() => setIsMouseInCanvas(false)}
      rotation={[(0 * Math.PI) / 180, 0, (-90 * Math.PI) / 180]}
    >
      <mesh
        position={[0, 0, -30]}
        geometry={nodes.denture_UpperJawScan.geometry}
        material={nodes.denture_UpperJawScan.material}
      />
      <mesh
        position={[0, 0, -30]}
        geometry={nodes.denture_LowerJawScan.geometry}
        material={nodes.denture_LowerJawScan.material}
      />
      <axesHelper args={[10]} />
      <Html position={[0, 20, -10]}>
        <div
          className={styles.circle}
          onPointerOver={() => setIsCardVisible(true)}
        />
        {isCardVisible && (
          <Card>
            <h4>Heading</h4>
            <p>
              Consectetur hic eveniet quisquam et tempore Possimus deleniti
              dolor nesciunt.
            </p>
          </Card>
        )}
      </Html>
    </group>
  );
};

useGLTF.preload("/gltf/FullDenture.gltf");
