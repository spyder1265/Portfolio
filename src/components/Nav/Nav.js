import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 10px 0 0  ;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #db3599;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
    return(
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo.svg" />
                    <List>
                        <ListItem className="hover:text-gray-300">Home</ListItem>
                        <ListItem className="hover:text-gray-300">Studio</ListItem>
                        <ListItem className="hover:text-gray-300">Works</ListItem>
                        <ListItem className="hover:text-gray-300">Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png"/>
                    <Button className="hover:bg-[#ad1570]">Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar;