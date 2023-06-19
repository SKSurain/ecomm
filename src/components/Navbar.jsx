import { Mail, Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
padding: 0px 20px 10px 20px;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between
`
const Left = styled.div`
flex: 1;
display:flex;
align-items: center;`
const Right = styled.div`
flex: 1;
display:flex;
align-items: center;
justify-content:flex-end;`

const Center = styled.div`
flex: 1;`

const Language = styled.span`
font-size: 14px; 
cursor: pointer;`

const SearchContainer = styled.div`
border: 1px solid lightgrey;
display:flex;
align-items: center;
margin-left: 20px;
padding:5px;`

const Input = styled.input`
border:none;
`

const Logo = styled.h1`
font-weight: bold;`

const MenuItem = styled.div`
font-size: 14px; 
cursor:pointer;
margin:25px; 
`

export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>English</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: "16px" }}></Search>
                    </SearchContainer>
                </Left>
                <Center><Logo>BONDO12</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary"><ShoppingCartOutlined /></Badge></MenuItem>
                </Right>
            </Wrapper>
        </Container >
    )
}
