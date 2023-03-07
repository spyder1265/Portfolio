import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import Macbook from "./Macbook";

const Graphics = () => {
    return(
        <Canvas>
            <Stage environment="city" intensity={0.2}>
                <Macbook/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
        </Canvas>
    )
}

export default Graphics;