import { useGLTF, Merged, RenderTexture, PerspectiveCamera, Text, Environment } from '@react-three/drei'
import { useRef, useMemo, useContext, createContext } from "react";
import { useControls } from 'leva'
import { useFrame } from '@react-three/fiber'

import Port from './Port';

const context = createContext();
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF("/computer.glb");
  const instances = useMemo(
    () => ({
      Object: nodes.Object_4,
      Object5: nodes.Object_58,
      Object6: nodes.Object_84,
      Object11: nodes.Object_174,
      Object18: nodes.Object_34,
      Object23: nodes.Object_30,
      Scrab: nodes.scrab,
      Object34: nodes.Object_206,
      Object40: nodes.Object_216,
      Object41: nodes.Object_215,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

export function Computer(props) {
  const { nodes, materials } = useGLTF("/computer.glb")
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]}>
               <group position={[0.16, 0.79, -1.97]} rotation={[-0.54, 0.93, -1.12]} scale={0.5}>
                <instances.Object
                  position={[1.65, -4.05, 5.53]}
                  rotation={[-0.19, 0.22, -0.14]}
                />
              </group>

              <group
                position={[-2.79, 0.27, 1.82]}
                rotation={[-1.44, 1.22, 1.43]}
                scale={0.5}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6001.geometry}
                  material={materials.Texture}
                  position={[12.87, 1.89, 7.06]}
                  rotation={[-1.13, -0.99, -1.44]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6002.geometry}
                  material={materials.Texture}
                  position={[1.03, -1.1, 1.69]}
                  rotation={[-1.49, -0.03, 0.13]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6003.geometry}
                  material={materials.Texture}
                  position={[1.88, 1.52, 7.63]}
                  rotation={[-0.85, -0.25, -0.91]}
                />
              </group> 
              <group
                position={[-5.6, 4.62, -0.03]}
                rotation={[-1.96, 0.16, 1.2]}
                scale={0.5}
              >
                <instances.Object
                  position={[5.47, -0.4, -1.95]}
                  rotation={[0.48, 0.12, -0.58]}
                  scale={1.16}
                />
              </group>
              <group
                position={[-3.79, 0, 1.66]}
                rotation={[Math.PI, -1.39, 0]}
                scale={-1.52}
              >
                <instances.Object5
                  position={[-0.91, 0.3, 1.86]}
                  rotation={[0.22, 1.4, 1.5]}
                />
              </group>
              <group
                position={[-3.79, 1.53, 1.66]}
                rotation={[0, 1.22, -Math.PI]}
                scale={-1.52}
              >
                <instances.Object5
                  position={[0.1, -1, 2.03]}
                  rotation={[Math.PI, -0.06, Math.PI]}
                  scale={[1.87, 2.68, 1.17]}
                />
              </group>
              <group
                position={[-5.49, 0, -1.38]}
                rotation={[Math.PI, -0.99, Math.PI]}
                scale={1.52}
              >
                <instances.Object6
                  position={[0.6, 0, 0]}
                  scale={[1.43, 1, 1]}
                />
              </group>
              <group
                position={[-3.01, 0, -3.79]}
                rotation={[0, 0.6, 0]}
                scale={1.52}
              >
                <instances.Object6 />
              </group>
              <group
                position={[-2.08, 0, -4.32]}
                rotation={[Math.PI, -0.6, Math.PI]}
                scale={1.52}
              >
                <instances.Object6 />
              </group>
              <group
                position={[-1.02, 0, -4.49]}
                rotation={[0, 0.31, 0]}
                scale={1.52}
              >
                <instances.Object6 />
              </group>
              <group
                position={[-5.31, 1.83, -1.41]}
                rotation={[0, 1.06, Math.PI / 2]}
                scale={1.52}
              >
                <instances.Object6
                  position={[0, 0.04, 0.01]}
                  rotation={[-0.15, 0, 0]}
                />
              </group>
              <group
                position={[-4.18, 1.83, -3.06]}
                rotation={[-Math.PI, -0.46, -Math.PI / 2]}
                scale={1.52}
              >
                <instances.Object6 />
              </group>
              <group
                position={[-1.76, 1.83, -3.6]}
                rotation={[0, -1.16, Math.PI / 2]}
                scale={1.52}
              >
                <instances.Object6 />
              </group>
              <group
                position={[-0.25, 1.83, -5.54]}
                rotation={[0, 1.55, 1.57]}
                scale={1.52}
              >
                <instances.Object6 />
              </group>
              <group
                position={[-5.49, 2.14, -1.38]}
                rotation={[0, 0.99, 0]}
                scale={1.52}
              >
                <instances.Object6
                  position={[-0.09, 0, 0]}
                  rotation={[0, -0.15, 0]}
                />
              </group>
              <group
                position={[-1.02, 2.14, -4.49]}
                rotation={[Math.PI, -0.31, Math.PI]}
                scale={1.52}
              >
                <instances.Object6
                  position={[0.12, 0, 0.04]}
                  rotation={[0, 0.24, 0]}
                />
              </group>
              <group
                position={[-4.18, 3.98, -3.06]}
                rotation={[-Math.PI, -0.46, -Math.PI / 2]}
                scale={1.52}
              >
                <instances.Object6 />
              </group>
              <group
                position={[-1.17, 3.98, -4.45]}
                rotation={[0, 0.17, Math.PI / 2]}
                scale={1.52}
              >
                <instances.Object6 />
              </group>
              <group
                position={[-0.94, 3.98, -4.66]}
                rotation={[Math.PI, 0.02, -Math.PI / 2]}
                scale={1.52}
              >
                <instances.Object6 />
              </group>
              <group
                position={[2.59, 0, -4]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_164.geometry}
                  material={materials.Texture}
                />
              </group>
              <group
                position={[1.66, 0, -4.54]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_168.geometry}
                  material={materials.Texture}
                />
              </group>
              <group
                position={[0.59, 0, -4.7]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_170.geometry}
                  material={materials.Texture}
                />
              </group>
              <group
                position={[4.89, 1.83, -1.62]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_172.geometry}
                  material={materials.Texture}
                  position={[-0.35, 0, -0.25]}
                  rotation={[0, -0.11, 0]}
                />
              </group>
              <group
                position={[3.75, 1.83, -3.28]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <instances.Object11 />
              </group>
              <group
                position={[1.33, 1.83, -3.82]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_176.geometry}
                  material={materials.Texture}
                />
              </group>
              <group
                position={[4.86, 2.14, -2.54]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_180.geometry}
                  material={materials.Texture}
                  position={[-0.06, 0, 0.16]}
                />
              </group>
              <group
                position={[5.06, 2.14, -1.6]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_184.geometry}
                  material={materials.Texture}
                  position={[-0.37, 0, -0.19]}
                />
              </group>
              <group
                position={[2.59, 2.14, -4]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              />
              <group
                position={[1.66, 2.14, -4.54]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_192.geometry}
                  material={materials.Texture}
                  position={[-0.24, 0, 0.18]}
                  rotation={[0, -0.72, 0]}
                />
              </group>
              <group
                position={[0.59, 2.14, -4.7]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_194.geometry}
                  material={materials.Texture}
                  position={[0.13, 0, -0.35]}
                  rotation={[0, 1.24, 0]}
                />
              </group>
              <group
                position={[4.89, 3.98, -1.62]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              />
              <group
                position={[3.75, 3.98, -3.28]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <instances.Object11
                  position={[-0.98, -1.44, 0.2]}
                  rotation={[0, 0.11, 0]}
                  scale={[1.48, 1.13, 1.41]}
                />
              </group>
              <group
                position={[0.75, 3.98, -4.66]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_200.geometry}
                  material={materials.Texture}
                />
              </group>
              <group
                position={[-2.9, 0.3, -1.47]}
                rotation={[Math.PI, -1.35, Math.PI / 2]}
                scale={1.52}
              >
                <instances.Object18
                  position={[0, -0.52, 1.1]}
                  rotation={[0.44, 0, 0]}
                />
              </group>
              <group
                position={[-3.72, 0, -2.89]}
                rotation={[0, 0.64, 0]}
                scale={1.52}
              >
                <instances.Object18 />
              </group>
              <group
                position={[-0.08, 0, -5.03]}
                rotation={[Math.PI, -0.04, Math.PI]}
                scale={1.52}
              >
                <instances.Object18 />
              </group>
              <group
                position={[-5.95, 2.14, -0.64]}
                rotation={[Math.PI, -0.95, Math.PI]}
                scale={1.52}
              >
                <instances.Object18
                  position={[0.14, 0, -0.01]}
                  rotation={[0, 0.15, 0]}
                />
              </group>
              <group
                position={[-3.73, 2.14, -3.1]}
                rotation={[Math.PI, -0.64, Math.PI]}
                scale={1.52}
              >
                <instances.Object18 position={[0.21, 0, 0.06]} />
              </group>
              <group
                position={[-4.19, 3.98, -2.77]}
                rotation={[Math.PI, -0.66, -Math.PI / 2]}
                scale={-1.52}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials.Texture}
                />
              </group>
              <group
                position={[5.53, 0, -0.85]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials.Texture}
                  position={[-0.21, 0, -0.11]}
                  rotation={[0, -0.17, 0]}
                />
              </group>
              <group
                position={[3.29, 0, -3.1]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_166.geometry}
                  material={materials.Texture}
                />
              </group>
              <group
                position={[3.77, 1.84, -2.98]}
                rotation={[-Math.PI, 0, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_178.geometry}
                  material={materials.Texture}
                  position={[-0.05, 0, -0.03]}
                />
              </group>
              <group
                position={[0.18, 2.8, -2.85]}
                rotation={[0.09, 0.15, -0.01]}
              >
                <instances.Object23
                  position={[-1.2, -1.86, 3.18]}
                  rotation={[-0.22, -0.03, 1.4]}
                />
              </group>
              <group
                position={[1.89, 0, -1.94]}
                rotation={[0, -0.44, 0]}
                scale={[1.5, 1, 1.5]}
              >
                <instances.Object23
                  position={[-0.11, 0.02, 1.65]}
                  rotation={[0, -0.47, 0]}
                />
              </group>
              <group
                position={[1.86, 1.61, -1.81]}
                rotation={[0, -Math.PI / 3, 0]}
              >
                <instances.Object23 position={[1.14, -1.67, 2.49]} />
              </group>
              <group position={[-1.1, 4.29, -4.43]} rotation={[0, 0.36, 0]}>
                <instances.Object23 position={[-0.64, 0, 0.22]} />
              </group>
              <group
                position={[3.2, 4.29, -3.09]}
                rotation={[-Math.PI, 0.56, 0]}
                scale={-1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_204.geometry}
                  material={materials.Texture}
                  position={[-0.92, -0.85, -0.36]}
                  rotation={[0, 0.27, 1.56]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_204001.geometry}
                  material={materials.Texture}
                  position={[-3.91, -3.25, 0.52]}
                  rotation={[0, 0.4, 1.56]}
                  scale={[1.97, 2.93, 1.65]}
                />
              </group>
              <group position={[-2.73, 0.63, -0.52]} rotation={[0, 1.09, 0]}>

              <ScreenText frame="Object_212" panel="Object_213" x={-4} y={5} position={[0.31, 0, -2.07]}
                  rotation={[0, -0.26, 0]}
                  scale={[1.09, 1.09, 1]}/>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_212.geometry}
                  material={materials.Texture}
                  position={[0.31, 0, -2.07]}
                  rotation={[0, -0.26, 0]}
                  scale={[1.09, 1.09, 1]}
                />
              </group>
              <group position={[-1.43, 2.5, -1.8]} rotation={[0, 1, 0]}>
              <ScreenPort invert frame="Object_209" panel="Object_210" x={0} y={5.1} position={[0.78, -0.32, -1.97]}
                  rotation={[0, -0.55, 0]}
                  scale={[1.22, 1.22, 1]} />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_209.geometry}
                  material={materials.Texture}
                  position={[0.78, -0.32, -1.97]}
                  rotation={[0, -0.55, 0]}
                  scale={[1.22, 1.22, 1]}
                />
              </group>
              <group
                position={[-3.42, 3.06, 1.3]}
                rotation={[0, 1.22, 0]}
                scale={0.9}
              >
                <ScreenPort frame="Object_215" y={0.8} panel="Object_216" position={[1.28, 0.69, -3.16]}
                  rotation={[0, -0.1, 0]}
                  scale={[1.11, 1.11, 1]}/>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_221.geometry}
                  material={materials.Texture}
                  position={[1.28, 0.69, -3.16]}
                  rotation={[0, -0.1, 0]}
                  scale={[1.11, 1.11, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_221001.geometry}
                  material={materials.Texture}
                  position={[2.33, -0.82, 2.48]}
                  rotation={[1.59, 0.01, 0.67]}
                  scale={[0.9, 0.91, 1.17]}
                />
              </group>
              <group position={[0.27, 1.53, -2.61]}>
                <ScreenInteractive panel="scrab" position={[-0.09, -0.96, 4.39]}
                  rotation={[0.02, 0.17, -0.21]}
                  scale={[1.58, 1.5, 1.0]}/>

                <instances.Object34
                  position={[-0.09, -0.97, 4.39]}
                  rotation={[0.02, 0.17, -0.21]}
                  scale={[1.54, 1.49, 1.01]}
                />
              </group>
              <group
                position={[3.11, 2.15, -0.18]}
                rotation={[0, -0.79, 0]}
                scale={0.81}
              >
                <ScreenText invert frame="Object_230" y={1} panel="Object_231" position={[0.18, 1.86, -2.96]}
                  rotation={[0, -0.15, 0]}/>  

                <ScreenPort frame="Object_218"  panel="Object_219" x={-5} position={[-7.27, 3.05, 0.89]}
                  rotation={[0, 1.12, 0]}/>  
                
                <ScreenInteractive frame="scrab" panel="scrab2" position={[-0.17, -2.5, 1.87]}
                  rotation={[-Math.PI, 1.5, -Math.PI]}
                  scale={[0.71, 1.2, 0.93]}/>

                <ScreenInteractive panel="scrab3" position={[-1.59, 0.43, 3.74]}
                  rotation={[0.54, 1.21, -0.65]}
                  scale={[0.93, 0.93, 1.24]}/>

                <ScreenInteractive panel="scrab4"  position={[-2.62, -1.04, 4.8]}
                  rotation={[-0.91, 0.11, 0.10]}
                  scale ={1.1}/>

                <instances.Object34
                  position={[0.18, 1.86, -2.96]}
                  rotation={[0, -0.15, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218001.geometry}
                  material={materials.Texture}
                  position={[-7.27, 3.09, 0.89]}
                  rotation={[0, 1.12, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218002.geometry}
                  material={materials.Texture}
                  position={[-2.66, -1.02, 4.82]}
                  rotation={[-0.92, 0.11, 0.11]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218003.geometry}
                  material={materials.Texture}
                  position={[-0.17, -2.66, 1.87]}
                  rotation={[-Math.PI, 1.5, -Math.PI]}
                  scale={[0.71, 1.34, 0.93]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218004.geometry}
                  material={materials.Texture}
                  position={[-1.59, 0.43, 3.74]}
                  rotation={[0.54, 1.21, -0.65]}
                  scale={[0.93, 0.93, 1.24]}
                />
              </group>
              <group
                position={[1.84, 0.38, -1.77]}
                rotation={[0, -Math.PI / 9, 0]}
              >
                <ScreenPort invert y={0.9} frame="Object_224" panel="Object_225" position={[2.31, -0.35, -0.92]} rotation={[0, -0.32, 0]} scale={[1.39, 1.2, 1.39]}/>
                <instances.Object41
                  position={[2.31, -0.35, -0.92]}
                  rotation={[0, -0.32, 0]}
                  scale={[1.39, 1.2, 1.39]}
                />
              </group>
              <group position={[-3.9, 4.29, -2.64]} rotation={[0, 0.54, 0]}>
                <instances.Object41 />
              </group>
              <group position={[0.96, 4.28, -4.2]} rotation={[0, -0.65, 0]}>
                <ScreenPort invert frame="Object_227" y={1} panel="Object_228" position={[0.29, 0, -0.22]}
                  /> 
                <ScreenText y={0.9} frame="Object_227" panel="Object_228" position={[6.39, -2.14, -0.09]}
                  rotation={[0, -0.83, 0]}
                  scale={[1.23, 1.23, 1]}
                  /> 
                
                <ScreenInteractive panel="scrab2" position={[1.37, -4.13, 6.09]}
                  rotation={[-0.275, -0.01, -0.22]}
                  scale={[1.1, 1.13, 1.1]}/>
              
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227.geometry}
                  material={materials.Texture}
                  position={[0.29, 0, -0.22]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227001.geometry}
                  material={materials.Texture}
                  position={[6.39, -2.14, -0.09]}
                  rotation={[0, -0.83, 0]}
                  scale={[1.23, 1.23, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227002.geometry}
                  material={materials.Texture}
                  position={[1.37, -4.13, 6.09]}
                  rotation={[-0.4, -0.53, -0.26]}
                  scale={[1, 1.12, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227003.geometry}
                  material={materials.Texture}
                  position={[0.46, -4.19, 4.69]}
                  rotation={[-2.42, -1.33, -2.3]}
                  scale={[1, 1.12, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227004.geometry}
                  material={materials.Texture}
                  position={[0.91, -2.99, 4.31]}
                  rotation={[-2.9, -0.84, -2.83]}
                  scale={[0.74, 0.82, 0.74]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227005.geometry}
                  material={materials.Texture}
                  position={[1.16, -4.27, 3.05]}
                  rotation={[-2.98, -0.24, -2.97]}
                  scale={[1.14, 1.26, 1.14]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227006.geometry}
                  material={materials.Texture}
                  position={[1.68, -2.91, 3.22]}
                  rotation={[-2.98, 0.28, -3.06]}
                  scale={[0.93, 1.04, 0.93]}
                />
              </group>
              <group
                position={[4.68, 4.29, -1.56]}
                rotation={[0, -Math.PI / 3, 0]}
              >
                <ScreenText frame="Object_224" panel="Object_225" y={0.85} x={-0.0} position={[-2.31, -1.39, 0.22]}
                  rotation={[0, 0.37, 0]} />
                <instances.Object41
                  position={[-2.31, -1.4, 0.22]}
                  rotation={[0, 0.37, 0]}
                />
              </group>
              {/* <ScreenText frame="Object_209" panel="Object_210" y={5} position={[-1.43, 2.5, -1.8]} rotation={[0, 1, 0]} />
              <ScreenText invert frame="Object_212" panel="Object_213" x={-5} y={5} position={[-2.73, 0.63, -0.52]} rotation={[0, 1.09, 0]} />
              <ScreenText invert frame="Object_215" panel="Object_216" position={[1.84, 0.38, -1.77]} rotation={[0, -Math.PI / 9, 0]} /> */}
              {/* <ScreenText invert frame="Object_218" panel="Object_219" x={-5} position={[3.11, 2.15, -0.18]} rotation={[0, -0.79, 0]} scale={0.81} /> */}
              {/* <ScreenText frame="Object_221" panel="Object_222" y={5} position={[-3.42, 3.06, 1.3]} rotation={[0, 1.22, 0]} scale={0.9} />  */}
              <ScreenText invert frame="Object_224" panel="Object_225" position={[-3.9, 4.29, -2.64]} rotation={[0, 0.54, 0]} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

function Screen({panel, children, ...props }) {
  const { nodes, materials } = useGLTF('/computer.glb')
  return (
    <group {...props}>
      {/* <mesh castShadow receiveShadow geometry={nodes[frame].geometry} material={materials.Texture} /> */}
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial >
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
      
    </group>
  )
}

/* Renders a monitor with some text */
function ScreenText({ invert, x = 0, y = 1, ...props }) {
  const textRef = useRef()
  const rand = Math.random() * 10000
  useFrame((state) => (textRef.current.position.x = x + Math.sin(rand + state.clock.elapsedTime / 4) * 10))
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 15]} />
      <color attach="background" args={[invert ? 'black' : '#35c19f']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text font={'/Press.woff'} position={[x, y, 0]} ref={textRef} fontSize={2.8} letterSpacing={-0.1} color={!invert ? 'black' : '#35c19f'}>
       Portfolio
      </Text>
    </Screen>
  )
}

function ScreenPort({ invert, x = 0, y = 1.0, ...props }) {
  const textRef = useRef()
  const rand = Math.random() * 10000
  useFrame((state) => (textRef.current.position.x = x + Math.sin(rand + state.clock.elapsedTime / 4) * 12.5))
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 15]} />
      <color attach="background" args={[invert ? 'black' : '#35c19f']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text font={'/Press.woff'} position={[x, y, 0]} ref={textRef} fontSize={2.8} letterSpacing={0.0} color={!invert ? 'black' : '#35c19f'}>
       AliveAnkur
      </Text>
    </Screen>
  )
}


/* Renders a monitor with a spinning box */
function ScreenInteractive(props) {
  const rand = Math.random() * 10
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color args={["orange"]} attach="background" /> 
      <pointLight position={[10, 10, 10]} intensity={0.75} />
      <Port random={rand} position={[-3.15, 0.75, 0]} scale={0.5} />
    </Screen>
  )
}


