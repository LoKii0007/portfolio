
import React, {useEffect} from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'


export function TeseractModel(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/teseract-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  function playAnimation() {
    Object.keys(actions).forEach((key) => {
      actions[key].play()
    })
  }

  useEffect(() => {
    playAnimation()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group >
        <group name="5f1c3a7e82534c1490eb149f4b7432e9fbx">
          <group name="RootNode">
            <group name="Skeleton">
              <primitive object={nodes.joint53_01} />
              <primitive object={nodes.joint54_03} />
              <primitive object={nodes.joint55_05} />
              <primitive object={nodes.joint56_07} />
              <primitive object={nodes.joint57_09} />
              <primitive object={nodes.joint58_011} />
              <primitive object={nodes.joint59_00} />
              <primitive object={nodes.joint60_014} />
              <primitive object={nodes.joint61_016} />
              <primitive object={nodes.joint62_018} />
              <primitive object={nodes.joint63_020} />
              <primitive object={nodes.joint64_022} />
              <primitive object={nodes.joint65_024} />
              <primitive object={nodes.joint66_026} />
              <primitive object={nodes.joint67_028} />
              <primitive object={nodes.joint68_030} />
              <primitive object={nodes.base_032} />
            </group>
          </group>
        </group>
        <group name="tesseract_lambert1_0">
          <skinnedMesh name="tesseract_lambert1_0_1" geometry={nodes.tesseract_lambert1_0_1.geometry} material={materials.lambert1} skeleton={nodes.tesseract_lambert1_0_1.skeleton} />
          <skinnedMesh name="tesseract_lambert1_0_2" geometry={nodes.tesseract_lambert1_0_2.geometry} material={materials.lambert1} skeleton={nodes.tesseract_lambert1_0_2.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/teseract-transformed.glb')
