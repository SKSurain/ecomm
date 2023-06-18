import { Send } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60vh;
background-color:#fcf5f5;
display: flex; 
align-items: center; 
justify-content:center;`;
const Title = styled.h1``;
const Description = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;
export const Newsletter = () => {
    return (
        <Container>
            <Title>Newletter</Title>
            <Description>Get our latest update on clothing we are about to release. Ofcourse it comes with great and worthy discounts as well.</Description>
            <InputContainer>
                <Input />
                <Button><Send /></Button>
            </InputContainer>
        </Container>
    )
}
