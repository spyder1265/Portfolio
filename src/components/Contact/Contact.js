import React, {useRef, useState} from "react";
import styled from "styled-components";
import Map from "../Map/Map";
import emailjs from '@emailjs/browser';

const Section = styled.div`
  background: rgba(0,0,0,0.6);
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const Title = styled.h1`
  display: block;
  font-size: 2em;
  margin: 0.67em 0;
  font-weight: 200;
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  
`;

const Input = styled.input`
  padding: 15px;
  background-color: #e8e6e6;
  border: none;
  color: black;
  border-radius: 5px;

  &:focus{
   outline: none;
  }
`;
const Textarea = styled.textarea`
  padding: 15px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  color: black;

  &:focus{
    outline: none;
  }
`;
const Button = styled.button`
  background-color: #db3599;
  color: white;
  font-weight: bold;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover{
    background-color: #ad1570;
  }
`;

const Right = styled.div`
  flex: 1;
`;


const Contact = () => {
    const ref = useRef();
    const [success, setSuccess] = useState (null)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_26o1ayq', 'template_q30jj5e', ref.current, 'drAxLtYMZkk2h1eGC')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
                setSuccess(false)
            });
    }

    return(
        <Section>
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <Title>Contact Me</Title>
                        <Input placeholder="Name" name="name"/>
                        <Input placeholder="Email" name="email"/>
                        <Textarea placeholder="Write your message" name="message" rows={8}/>
                        <Button type="submit">Send</Button>
                        {success && "your message has been sent. I'll get back soon :)"}
                    </Form>
                </Left>
                <Right>
                    <Map/>
                </Right>
            </Container>
        </Section>
    )
}

export default Contact;