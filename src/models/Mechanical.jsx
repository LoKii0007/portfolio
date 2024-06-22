
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mechanical(props) {
  const { nodes, materials } = useGLTF('/mechanical-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Big_Buttons}  />
      <mesh geometry={nodes.Object_3.geometry} material={materials.Chassis}  />
      <mesh geometry={nodes.Object_4.geometry} material={materials.Small_Buttons}  />
    </group>
  )
}

useGLTF.preload('/mechanical-transformed.glb')
