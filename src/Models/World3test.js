/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/portfoliotest2/world3test.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.bridge.geometry}
        material={materials['Material.004']}
        position={[0.05, -0.36, -0.02]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.55, 0.15, 0.15]}
        
      />
      <mesh
        geometry={nodes.Tree.geometry}
        material={materials['Material.003']}
        position={[0.12, 0.46, -0.1]}
        scale={[0.33, 0.33, 0.33]}
        castShadow
      />
      <mesh
        geometry={nodes.Tree001.geometry}
        material={materials['Material.002']}
        position={[-0.19, 0.46, 0.07]}
        scale={[0.33, 0.33, 0.33]}
        castShadow
      />
      <mesh geometry={nodes.World.geometry} material={materials.Material} scale={[0.33, 0.33, 0.33]} receiveShadow />
    </group>
  )
}

useGLTF.preload('/portfoliotest2/world3test.glb')
