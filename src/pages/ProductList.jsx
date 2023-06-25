import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import { Products } from '../components/Products'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'


const Container = styled.div``;
const Title = styled.h1`
margin:20px;`;
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
margin:20px; `;
const Filter = styled.div`
margin: 20px;
display:flex;
${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })};`;
const FilterText = styled.div`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight: "0px" })};`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })};`;
const Option = styled.option``;


export const ProductList = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2] ? location.pathname.split("/")[2] : "";
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters(prev => {
            if (value === "Color" || value === "Size") {
                const { [e.target.name]: _, ...newFilters } = prev;
                return newFilters;
            } else {
                const newFilters = {
                    ...prev,
                    [e.target.name]: value.toUpperCase()
                }
                return newFilters;
            }
        })
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{category.toUpperCase()}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option>Color</Option>
                        <Option>White</Option>
                        <Option>Blue</Option>
                        <Option>Red</Option>
                        <Option>Pink</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter><FilterText >Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Newest (desc)</Option>
                    </Select></Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}
