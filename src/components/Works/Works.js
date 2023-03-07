import React, {useState} from "react";
import styled from "styled-components";
import Webdesign from "../Webdesign/Webdesign";
import Programming from "../Programming/Programming";
import Graphics from "../Graphics/Graphics";
import Music from "../Music/Music";
import Fullstack from "../fullstack/fullstack";

const data = [
    "Web Design",
    "Full-Stack",
    "Programming",
    "Music",
    "Graphics",
]

const Section = styled.div`
  height: 100vh;
  background: rgba(0,0,0,0.6);
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ListItem = styled.li`
    font-size: 70px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;
  
    ::after{
      content: "${(props)=>props.text}";
      position: absolute;
      top: 0;
      left: 0;
      color: pink;
      width: 0;
      overflow: hidden;
      white-space: nowrap;
    }
  
    &:hover{
      ::after{
        animation: colorme 0.5s linear both;
        
        @keyframes colorme{
          to{
            width: 100%;
          }
        }
      }
    }
`

const Right = styled.div`
    flex: 1;
`


const Works = () => {
    const [work, setWork]= useState("Web Design");
    return(
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((item)=>(
                            <ListItem key={item} text={item} onMouseOver={()=>setWork(item)} >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                    {
                        work === "Web Design" ? (
                            <Webdesign/>
                        ):
                        work === "Full-Stack" ? (
                                <Fullstack/>
                            ):
                        work === "Programming" ? (
                                <Programming />
                            ):
                            work === "Music" ? (
                            <Music/>
                        ):
                            (
                        <Graphics/>
                        )}
                </Right>
            </Container>
        </Section>
    )
}

export default Works;