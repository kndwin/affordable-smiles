/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mouth ({ ...props }) {
  const group = useRef()
	const { nodes, materials } = useGLTF('/gltf/AcrylicLowerJawScan.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  )
}

useGLTF.preload('/gltf/AcrylicLowerJawScan.gltf')