import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/iron-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh geometry={nodes.Object_7.geometry} material={materials['default.001']} skeleton={nodes.Object_7.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_9.geometry} material={materials['default.001']} skeleton={nodes.Object_9.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_11.geometry} material={materials['default.001']} skeleton={nodes.Object_11.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_13.geometry} material={materials['default.001']} skeleton={nodes.Object_13.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_15.geometry} material={materials['default.001']} skeleton={nodes.Object_15.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_17.geometry} material={materials['default.001']} skeleton={nodes.Object_17.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_19.geometry} material={materials['default.001']} skeleton={nodes.Object_19.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_21.geometry} material={materials['default.001']} skeleton={nodes.Object_21.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_23.geometry} material={materials['default.001']} skeleton={nodes.Object_23.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_25.geometry} material={materials['default.001']} skeleton={nodes.Object_25.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_27.geometry} material={materials['default.001']} skeleton={nodes.Object_27.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_29.geometry} material={materials['default.001']} skeleton={nodes.Object_29.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_31.geometry} material={materials['default.001']} skeleton={nodes.Object_31.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_33.geometry} material={materials['default.001']} skeleton={nodes.Object_33.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_35.geometry} material={materials['default.001']} skeleton={nodes.Object_35.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_37.geometry} material={materials['default.001']} skeleton={nodes.Object_37.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_39.geometry} material={materials['default.001']} skeleton={nodes.Object_39.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_41.geometry} material={materials['default.001']} skeleton={nodes.Object_41.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_43.geometry} material={materials['default.001']} skeleton={nodes.Object_43.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_45.geometry} material={materials['default.001']} skeleton={nodes.Object_45.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_47.geometry} material={materials['default.001']} skeleton={nodes.Object_47.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_49.geometry} material={materials['default.001']} skeleton={nodes.Object_49.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_51.geometry} material={materials['default.001']} skeleton={nodes.Object_51.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_53.geometry} material={materials['default.001']} skeleton={nodes.Object_53.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_55.geometry} material={materials['default.001']} skeleton={nodes.Object_55.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_57.geometry} material={materials['default.001']} skeleton={nodes.Object_57.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_59.geometry} material={materials['default.001']} skeleton={nodes.Object_59.skeleton} scale={0.531} />
      <skinnedMesh geometry={nodes.Object_61.geometry} material={materials['Material.003']} skeleton={nodes.Object_61.skeleton} scale={0.531} />
    </group>
  )
}

useGLTF.preload('/iron-transformed.glb')
