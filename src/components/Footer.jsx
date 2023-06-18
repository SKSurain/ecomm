import { EmailOutlined, Facebook, Instagram, LocationOnOutlined, PhoneAndroidOutlined, Pinterest, Twitter } from '@mui/icons-material';
import styled from 'styled-components'

const Container = styled.div`
display:flex;`;
const Left = styled.div`
flex: 1;
display:flex;
flex-direction: column;
padding: 20px;  `;
const Logo = styled.h1`
`;
const Description = styled.p`
margin: 20px 0px;;`;
const SocialContainer = styled.div`
display:flex;`;
const SocialIcon = styled.div`
display:flex; 
justify-content:center; 
align-items: center;
width:40px;
height:40px;
border-radius: 50%;
color:white;
margin-right: 20px;
background-color: #${props => props.color};
cursor:pointer;`
const Center = styled.div`
flex: 1;
padding:20px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display:flex;
flex-wrap: wrap;`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;`;

const Right = styled.div`
flex: 1;
padding:20px;`;
const ContactItem = styled.div`
display: flex; 
align-items: center;
margin-bottom: 20px;`;
export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BONDO12</Logo>
                <Description>This page is solely owned by BONDO12 Ecommerce Agency. We have sole right to determine and update the condition of this page at any given time. </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999"><Facebook /></SocialIcon>
                    <SocialIcon color="E4405F"><Instagram /></SocialIcon>
                    <SocialIcon color="55ACEE"><Twitter /></SocialIcon>
                    <SocialIcon color="E60023"><Pinterest /></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <LocationOnOutlined style={{ marginRight: "10px" }} />MY ADDRESS IS HERE, BELIEVE ME
                </ContactItem>
                <ContactItem>
                    <PhoneAndroidOutlined style={{ marginRight: "10px" }} />0187804827
                </ContactItem>
                <ContactItem>
                    <EmailOutlined style={{ marginRight: "10px" }} />surain.wira@gmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}
