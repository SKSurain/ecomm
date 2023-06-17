import styled from "styled-components"

const Container = styled.div`
heigh: 30px;
background-color: teal;
color: white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;`

export const Announcement = () => {
    return (
        <Container>Super Deal! Free Shipping on Orders Over $50</Container>
    )
}
