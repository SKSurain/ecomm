import { Mail, Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

const Container = styled.div`
height:60px;
padding:0px 20px 10px 20px;
${mobile({ height: "50px", padding: "0px 10px" })};
`

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
${mobile({ padding: "0px 0px" })};
`
const Left = styled.div`
flex:1;
display:flex;
align-items: center; `
const Right = styled.div`
flex: 1;
display:flex;
align-items:center;
justify-content:flex-end; 
${mobile({ justifyContent: "center", flex: 2 })};`

const Center = styled.div`
flex:1; `

const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({ display: "none" })}; `

const SearchContainer = styled.div`
border: 1px solid lightgrey;
display:flex;
align-items:center;
margin-left:20px;
margin-right:20px;
padding:5px; `

const Input = styled.input`
border:none;
${mobile({ width: "50px" })};
`

const Logo = styled.h1`
font-weight:bold;
${mobile({ fontSize: "12px" })}; `

const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin:25px;
${mobile({ fontSize: "12px", margin: "10px" })};
`


export const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    let navigate = useNavigate();

    const handleClick = (pageName) => {
        navigate(`/${pageName}`);
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>English</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: "16px" }}></Search>
                    </SearchContainer>
                </Left>
                <Center><Logo>BONDO12</Logo></Center>
                <Right>
                    <MenuItem onClick={() => handleClick('register')}>Register</MenuItem>
                    <MenuItem onClick={() => handleClick('login')}>Login</MenuItem>
                    <MenuItem onClick={() => handleClick('logout')}>Logout</MenuItem>

                    <NavLink to="/cart"
                        style={{
                            textDecoration: "none",
                            color: "inherit"
                        }}>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary"><ShoppingCartOutlined /></Badge>
                        </MenuItem>
                    </NavLink>
                </Right>
            </Wrapper>
        </Container >
    )
}
