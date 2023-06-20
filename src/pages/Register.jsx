import styled from "styled-components"
import { mobile } from '../responsive'


const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(
    rgba(255,255,255,0.5), 
    rgba(255,255,255,0.5)), 
    url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80")center;
    display:flex;
    align-items: center;
    background-size: cover; 
    justify-content: center;`;
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}; `;
const Title = styled.h1`
font-size: 24px; 
font-weigh: 300;`;
const Form = styled.div`
display:flex;
flex-wrap: wrap; `;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;`;
const Button = styled.button`
padding: 15px;
width: 40%;
border: none;
background-color: teal;
color:white;
cursor:pointer;`;

export const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>By creating this account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
