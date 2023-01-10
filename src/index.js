import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import { useState } from 'react'

function App() {
    return (
        <Canvas 
        camera={ {
            fov: 40,
            near: 0.1,
            far: 50,
            position: [ 0, 0, 7 ],
            rotation:[0.1,0,0]
        } }
        >
        <Experience />
    </Canvas>
    )
  }
 
  function Overlay() {
    const [ready, set] = useState(false)
    return (
      <>
        {ready && <App />}
        <div className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${ready && 'clicked'}`}>
            <span onClick={() => set(true)} style={{fontSize:"64px" ,color:"white" ,cursor:"pointer" }} >▶</span>
        </div>
      </>
    )
  }  

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
 <Overlay />
)