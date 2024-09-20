

import React, { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function RubiksCubeModel(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/rubiks-cube-transformed.glb')
  const { actions } = useAnimations(animations, group)

  function playAnimation() {
    Object.keys(actions).forEach((key) => {
      actions[key].play()
    })
  }

  useEffect(()=>{
    props.setCubeRef(group)
  }, [group])

  useEffect(() => {
    playAnimation()
  }, [])

  return (
    <group ref={group} {...props} dispose={null} rotation={[0,0, 0 ]} position={[-2,-2,-10]} >
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode" >
          <group name="Cube_0" position={[3.993, 4, 0.007]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube001_1" position={[4.001, 2, -3.999]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube002_2" position={[4.008, 0, -0.008]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube003_3" position={[1.993, 4, 0.007]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube004_4" position={[4.001, 2, -1.999]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube005_5" position={[2.008, 0, -0.008]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube006_6" position={[-0.007, 3.979, -4.014]} rotation={[3.131, 0, Math.PI / 2]}>
            <mesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube007_7" position={[-0.001, -0.006, -2.014]} rotation={[-Math.PI, 0.011, 0]}>
            <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube008_8" position={[-0.007, 4.021, -0.014]} rotation={[3.131, 0, Math.PI / 2]}>
            <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube009_9" position={[-0.001, 3.994, -1.993]} rotation={[-Math.PI, -1.571, 0]}>
            <mesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube010_10" position={[1.999, 0.001, -2]} rotation={[0, -1.571, 0]}>
            <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube011_11" position={[3.999, 4.009, -2.008]} rotation={[-Math.PI, -1.571, 0]}>
            <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube012_12" position={[1.994, 1.994, -4]} rotation={[-Math.PI, 0, 0]}>
            <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube014_14" position={[2.001, 2.001, 0]} rotation={[-Math.PI, 0, Math.PI / 2]}>
            <mesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube015_15" position={[0.001, 1.979, 0.001]} rotation={[1.573, -1.56, 0.002]}>
            <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube016_16" position={[1.999, 4.001, -2]} rotation={[0, 0.011, 0]}>
            <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube017_17" position={[4.001, 2.021, 0.001]} rotation={[1.573, -1.56, 0.002]}>
            <mesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube018_18" position={[3.993, 4, -3.993]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube019_19" position={[0.001, 2, -3.999]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube020_20" position={[4.008, 0, -4.008]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_83" geometry={nodes.Object_83.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube021_21" position={[1.993, 4, -3.993]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube022_22" position={[0.001, 2, -1.999]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh name="Object_91" geometry={nodes.Object_91.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube023_23" position={[2.008, 0, -4.008]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_95" geometry={nodes.Object_95.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube024_24" position={[0.008, -0.021, -3.987]} rotation={[3.131, 0, Math.PI / 2]}>
            <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube025_25" position={[3.999, 0.009, -1.987]} rotation={[-Math.PI, 0.011, 0]}>
            <mesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Cube026_26" position={[0.008, 0.021, 0.013]} rotation={[3.131, 0, Math.PI / 2]}>
            <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials.PaletteMaterial002} />
          </group>
        </group>
        <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.PaletteMaterial002} position={[2, 2, -2]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/rubiks-cube-transformed.glb')
