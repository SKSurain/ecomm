import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
height:100vh;
widht: 100%;
display:flex;
position:relative;`

const Wrapper = styled.div`
height:100%;
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius: 50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
cursor:pointer;
opacity: 50%;`

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;`;
const ImgContainer = styled.div`
flex:1;
heigh: 100%;
display:flex;
justify-content:center`
const Image = styled.img`
height: 73vh;`;
const InfoContainer = styled.div`
flex:1;
padding: 50px; `

const Title = styled.h1`
font-size: 70px;`
const Description = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;`


export const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE IS HERE!</Title>
                        <Description>THE WAIT IS OVER, LET'S START SHOPPING!</Description>
                        <Button>SHOW MORE</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container >
    )
}
