import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import Keyboard from './Keyboard';

const Music = () => {
    return(
        <Canvas>
            <Stage environment="city" intensity={0.2}>
                <Keyboard/>
            </Stage>

            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}

export default Music;