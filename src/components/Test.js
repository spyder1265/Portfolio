import React from "react";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Cube from "./Cube/Cube";

const Container = styled.div`
  background: rgba(0,0,0,0.6);
  height: 100vh;
  scroll-snap-align: center;
`;
const Test = () => {
  return(
      <Container>
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Cube/>
        </Canvas>
      </Container>
  )
}

export default Test;