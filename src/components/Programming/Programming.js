import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import Python from "./Python";

const Programming = () => {
    return(
        <Canvas>
            <Stage environment="city" intensity={0.15}>
                <Python/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}

export default Programming;