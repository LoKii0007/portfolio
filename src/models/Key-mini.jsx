
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function KeyboardMini(props) {
  const { nodes, materials } = useGLTF('/key-mini-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LP_keyboard_0.geometry} material={materials.keyboard} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.LP_outline_0.geometry} material={materials.outline} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/key-mini-transformed.glb')
