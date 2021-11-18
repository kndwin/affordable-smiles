import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Implant = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/gltf/Implant.gltf");
  return (
    <group scale={50} ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Abutment_fusion_converted.geometry}
        material={nodes.Abutment_fusion_converted.material}
        position={[0, -0.05, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Implant_fusion.geometry}
        material={nodes.Implant_fusion.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Mesh.geometry}
        material={nodes.Mesh.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cil_cut_min.geometry}
        material={nodes.Cil_cut_min.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Inside_carve.geometry}
        material={nodes.Inside_carve.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Crown_decimated.geometry}
        material={materials.Metall}
        position={[-0.03, -0.12, 0.08]}
        rotation={[1.13, -0.16, -0.07]}
      />
      <mesh
        geometry={nodes.Implant_top.geometry}
        material={nodes.Implant_top.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/gltf/Implant.gltf");
