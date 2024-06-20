import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Html(props) {
  const { nodes, materials } = useGLTF('/html-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[-10.526, 0, 18.962]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/html-transformed.glb')
