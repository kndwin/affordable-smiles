import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { Card } from "components";

export const FullDenture = ({ ...props }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const group = useRef();
  const { nodes, materials } = useGLTF("/gltf/FullDenture.gltf");
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, 10, -30]}
      rotation={[(10 * Math.PI) / 180, 0, (+90 * Math.PI) / 180]}
    >
      <mesh
        geometry={nodes.denture_UpperJawScan.geometry}
        material={nodes.denture_UpperJawScan.material}
      />
      <mesh
        geometry={nodes.denture_LowerJawScan.geometry}
        material={nodes.denture_LowerJawScan.material}
      />
      <Html position={[0, 20, 20]}>
				<div className={styles.circle} onClick={() => setIsCardVisible(!isCardVisible)} />
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
