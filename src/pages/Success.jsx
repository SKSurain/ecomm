import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1``;
const Subtitle = styled.h3``;

const Success = () => {
    return (
        <Container>
            <Title>YOU HAVE MADE YOUR PAYMENT SUCCESSFULLY!</Title>
            <Subtitle>Thank you for shopping at BONDO CLOTHINGS</Subtitle>
        </Container>
    );
};

export default Success;
