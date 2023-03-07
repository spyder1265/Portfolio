import React from "react";
import styled from "styled-components";
import {OrbitControls} from "@react-three/drei";
import Cube from "../Cube/Cube";
import {Canvas} from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  background: rgba(0,0,0,0.6);
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
`;

const Left = styled.div`
    flex: 1;
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Title = styled.h1`
    font-size: 64px;
    font-weight: bold;
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-weight: bold;
`;

const Description = styled.p`
    font-weight: 700;
`;

const Button= styled.button`
  padding: 10px;
  background-color: #db3599;
  font-weight: 500;
  width: 120px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  
  &:hover{
    background-color: #ad1570;
  }
`;





const Who = () => {
    return(
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{fov:25, position:[5,5,5]}}>
                        <OrbitControls enableZoom={false} autoRotate/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Cube/>
                    </Canvas>
                </Left>
                <Right>
                    <Title>Think outside the square space </Title>
                    <WhatWeDo>
                        <Line src="./Img/line.png"/>
                        <Subtitle>What I Do</Subtitle>
                    </WhatWeDo>
                    <Description>A <u>creative</u> <u>Goal-Oriented</u> Guy who loves what he does.</Description>
                    <Button>What i do</Button>
                </Right>
            </Container>
        </Section>
    )
}

export default Who;