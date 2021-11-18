import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const FullDenture = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/gltf/FullDenture.gltf");
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
			position={[0, 0, -30]}
      rotation={[0, 0 , +Math.PI / 2]}
    >
      <mesh
        geometry={nodes.denture_UpperJawScan.geometry}
        material={nodes.denture_UpperJawScan.material}
      />
      <mesh
        geometry={nodes.denture_LowerJawScan.geometry}
        material={nodes.denture_LowerJawScan.material}
      />
    </group>
  );
};

useGLTF.preload("/gltf/FullDenture.gltf");
