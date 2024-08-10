

import React, { useEffect } from 'react'
import { useGraph} from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/dragon-transformed.glb')
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
    <group ref={group} {...props} dispose={null} >
      <group>
        <group name="d4a107f2fa654be1afae51c2aea570c6fbx">
          <group name="RootNode">
            <group name="Dragon">
              <group name="Dragon_GlobalMove">
                <group name="Dragon_Bones">
                  <group name="Skeleton">
                    <primitive object={nodes.bn_Dragon_Hips_01} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="skn_BoneFinger_LOD_0_mat_bonefinger1_0">
          <skinnedMesh name="skn_BoneFinger_LOD_0_mat_bonefinger1_0_1" geometry={nodes.skn_BoneFinger_LOD_0_mat_bonefinger1_0_1.geometry} material={materials.mat_bonefinger1} skeleton={nodes.skn_BoneFinger_LOD_0_mat_bonefinger1_0_1.skeleton} />
          <skinnedMesh name="skn_BoneFinger_LOD_0_mat_bonefinger1_0_2" geometry={nodes.skn_BoneFinger_LOD_0_mat_bonefinger1_0_2.geometry} material={materials.mat_bonefinger1} skeleton={nodes.skn_BoneFinger_LOD_0_mat_bonefinger1_0_2.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/dragon-transformed.glb')
