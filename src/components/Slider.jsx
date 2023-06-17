import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"
import { sliderItems } from "../data"
import { useState } from "react"
const Container = styled.div`
height:100vh;
widht: 100%;
display:flex;
position:relative;
overflow: hidden;
margin: 10px 0px 0px 0px;`

const Wrapper = styled.div`
height:100%;
display:flex;
transform:translateX(${props => props.slideIndex * -100}vw);
transition: all 1.5s ease;
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
opacity: 50%;
z-index: 2;`

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #${props => props.bg}`;
const ImgContainer = styled.div`
flex:1;
heigh: 100%;
display:flex;
justify-content:center`
const Image = styled.img`
height: 100vh;`;
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
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOW MORE</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("left")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container >
    )
}
