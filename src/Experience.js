import * as THREE from 'three'
import {  Html, ContactShadows,CameraShake , Float, Environment, useGLTF, OrbitControls, MeshReflectorMaterial } from '@react-three/drei'
import { Suspense, useRef ,useState } from 'react'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { Instances, Computer } from './Computers'

export default function Experience()
{
     
    return <>
        <color attach="background" args={['#222']} />
        {/* <hemisphereLight intensity={0.15} groundColor="black" />  */}
        <Environment preset="night" /> 
        <spotLight position={[3, 20, 20]} color={"#00ff88"} angle={0.3} penumbra={1} intensity={0.2} />
        <Suspense>
        <group position={[-0, -1, 0]}>  
            <Instances >            
                <Computer />
                <Html wrapperClass='htmlScreen' transform scale={0.08} position={[0.4,1.45 ,1.95]} rotation={[0.01,0.18,-0.21]} >
                        <iframe src="https://alivefolio.vercel.app/" />
                </Html>
                <Html transform scale={0.9} position={[0.23,2.92 ,1.25]} rotation={[0.14,0.45,-0.18]} >
                      <a href="/cv.pdf" target="_blank" style={{font:'/Press.woff' , color:'#ffffffdd' , fontFamily:"sans-serif" ,textDecoration:"none", fontWeight:"800"}}> CV </a>  
                </Html>
            </Instances> 
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={[300, 30]}
                resolution={2048}
                mixBlur={1}
                mixStrength={80}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#202020"
                metalness={0.8}
            />
            </mesh>
           
        </group>        
        </Suspense>
        <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0.9} intensity={1} radius={0.7} />
            {/* <DepthOfField target={[0, 0, 15]} focalLength={0.3} bokehScale={15} height={400} /> */}
            <DepthOfField
                focusDistance={0}
                focalLength={0.02}
                bokehScale={2}
                height={480}
            />
        </EffectComposer>
        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.1 }
        />
        <Rig />
      
    </>
}

function Rig() {
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [1.5 + (state.pointer.x * state.viewport.width) / 4, -0.3 + (state.pointer.y) / 3, 7.5 ], 0.75, delta)
        state.camera.lookAt(0, 0.6, 0)
    })
   return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
}

