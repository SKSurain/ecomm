import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import { Products } from '../components/Products'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
margin:20px; `;
const Filter = styled.div`
margin: 20px;`;
const FilterText = styled.div``;


export const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Jackets</Title>
            <FilterContainer>
                <Filter>Filter 1</Filter>
                <Filter>Filter 2</Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}
