import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import Figma from "./Figma";

const Webdesign = () => {
    return(
        <Canvas>
            <Stage environment="city" intensity={0.4}>
                <Figma/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}

export default Webdesign;