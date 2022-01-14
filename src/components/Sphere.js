import { useFrame } from '@react-three/fiber'
import React, { useState } from 'react'
import { useStore } from '../state'
import * as THREE from 'three'
import { MeshWobbleMaterial } from '@react-three/drei'

import shallow from 'zustand/shallow'
import { Html } from '@react-three/drei/web/Html.cjs'

export default function Sphere(props) {
    const mesh = React.useRef();
    const [ active, toggleActive ] = useState(false)
    const [ amp ] = useStore(state => [ state.micAmp ])
    let audioFactors = {
        amp: 1,
    }

    let [ cI, setCI ] = useState({
        size: props.size,
        color: props.color,
        heightSegments: props.heightSegments,
        widthSegments: props.widthSegments,
        posX: props.position[0],
        posY: props.position[1],
        posZ: props.position[2],
        rotX: props.rotX,
        activeRot: true,
        rotY: props.rotY,
        
        rotZ: props.rotZ

    })

    const handleChange = (event) => {
        const { value, name } = event.target;
        let newCI = {...cI}
        newCI[name] = value;
        setCI(newCI)
    }

    const handleClick = () => {
        toggleActive(!active)
    }

    const style = {
        backgroundColor: 'grey',
        padding: '0.6em',
        opacity: '0.7',
        borderRadius: '0.5em'
    }

    const controllerInterface = <Html style={style} position={[cI.posX-10, cI.posY+2, -50]} rotationY={0.2}>
                                    <div>
                                        <form>

                                            <label htmlfor='color'>Farbe</label>
                                            <br/>
                                            <input type='color' name='color' value={cI.color} onChange={handleChange}/>

                                            <br/>

                                            <label htmlfor='size'>Größe</label>
                                            <input type='range' name='size' value={cI.size} onChange={handleChange}/>

                                            <label htmlfor='heightSegments'>heightSegments</label>
                                            <input type='range' min={1} max={20} name='heightSegments' value={cI.heightSegments} onChange={handleChange}/>

                                            <label htmlfor='widthSegments'>widthSegments</label>
                                            <input type='range' min={1} max={20} name='widthSegments' value={cI.widthSegments} onChange={handleChange}/> 

                                            <br/>

                                            <label htmlfor='X'>X</label>
                                            <input type='range' min={-8.8} max={8.8} name='posX' value={cI.posX} onChange={handleChange}/>
                                            <label htmlfor='Y'>Y</label>
                                            <input type='range' min={-10} max={10} name='posY' value={cI.posY} onChange={handleChange}/>
                                            <label htmlfor='Z'>Z</label>
                                            <input type='range' min={-10} max={10} name='posZ' value={cI.posZ} onChange={handleChange}/>

                                            <br/>

                                            <label htmlfor='rotX'>Rotation X</label>
                                            <input type='range' min={-100} max={100} name='rotX' value={cI.rotX} onChange={handleChange}/>
                                            <label htmlfor='rotY'>Rotation Y</label>
                                            <input type='range' min={-100} max={100} name='rotY' value={cI.rotY} onChange={handleChange}/>
                                            <label htmlfor='rotZ'>Rotation Z</label>
                                            <input type='range' min={-100} max={100} name='rotZ' value={cI.rotZ} onChange={handleChange}/>
                                        </form>
                                    </div>
                                </Html>

    useFrame(() => {
        

        if(cI.activeRot) {

            var ampRot = amp/30;
            mesh.current.rotation.x += (cI.rotX/1000) * ampRot;
            mesh.current.rotation.y += (cI.rotY/1000) * ampRot;
            mesh.current.rotation.z += (cI.rotZ/1000) * ampRot;
        }
    })



    return(
        <React.Fragment>

        {active ? controllerInterface : null}

        <mesh
            position={[cI.posX, cI.posY, cI.posZ]}
            ref={mesh}
            scale={cI.size/10+amp/40}
            onClick={handleClick}
            
            >
            
            <sphereGeometry args={[1, cI.heightSegments+amp*20, cI.widthSegments]} />
            
            <MeshWobbleMaterial 
                attact='material'
                color={cI.color}
                side={THREE.DoubleSide}
                factor={1*(amp)}
                speed={0.1*(0.01/amp)}
                refractionRatio={3}
                roughness={0.2}
                wireframe={false}
                />
          </mesh>
          </React.Fragment >

    )
}