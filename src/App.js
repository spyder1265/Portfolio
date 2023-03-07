import React from "react";
import Hero from "./components/Hero/Hero";
import Who from "./components/Who/Who";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import styled from "styled-components";

// noinspection CssUnknownTarget
const Container = styled.div`
  height: 100vh;
  background: url("./Img/bg.PNG") no-repeat;
  background-size: cover;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;

  &::-webkit-scrollbar {
    display: none;
  }
`

const App = () => {
    return(
        <Container>
            <Hero/>
            <Who/>
            <Works/>
            <Contact/>
        </Container>
    )
}

export default App;