import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import {  Html , useCursor } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel } from 'lamina'

export default function Port({ random, ...props}) {

    const ref = useRef()
    const use = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useCursor(hovered)
    useFrame((state, delta) => { 
      ref.current.rotation.x = ref.current.rotation.y += Math.sin(delta + random * 10)*0.003
      const sin = Math.sin(state.clock.elapsedTime / 2)
      const cos = Math.cos(state.clock.elapsedTime / 2)
      use.current.layers[1].origin.set(cos, sin, cos)
      use.current.layers[2].origin.set(sin, cos, sin)
      use.current.layers[3].origin.set(cos, cos, sin)
      })
    return (
      <mesh href="/cv.pdf" target="_blank" ref={ref} {...props} scale={2.1} >
      <dodecahedronGeometry />
      <LayerMaterial ref={use}  toneMapped={false}>
        <Depth colorA="#000000" colorB="black" mode="normal" near={0.5 * 0.66} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.66} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 0.66} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1 * 0.66} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial>
      
      </mesh>
    )
}
