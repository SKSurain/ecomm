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
width: 25%;
padding: 20px;
background-color: white; 
${mobile({ width: "75%" })};`

const Title = styled.h1`
font-size: 24px; 
font-weigh: 300;`;
const Form = styled.div`
display:flex;
flex-wrap: wrap;
flex-direction: column; `;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;`;
const Button = styled.button`
padding: 15px;
width: 40%;
border: none;
background-color: teal;
color:white;
cursor:pointer;
margin-bottom:10px;`;
const Link = styled.div`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor:pointer;`;

export const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>Create A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}
