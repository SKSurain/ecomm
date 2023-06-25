import styled from 'styled-components'
import { popularProducts } from '../data'
import { Product } from './Product'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Container = styled.div`
padding: 20px;
display: flex; 
flex-wrap:wrap;
justify-content: space-between; `


export const Products = ({ category, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    category
                        ?
                        `http://localhost:5000/api/products?category=${category}`
                        : "http://localhost:5000/api/products");
                setProducts(res.data)
            } catch (err) { console.log(err) }
        }
        getProducts()
    }, [category]);


    useEffect(() => {
        let displayProducts = products;

        if (Object.keys(filters).length > 0) {
            displayProducts = displayProducts.filter(item =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)))
        }

        setFilteredProducts(displayProducts);
    }, [products, category, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createAt - b.createAt)
            )
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price))
        } else {

            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort])

    return (
        <Container>
            {filteredProducts.map(item => (
                <Product item={item} key={item.id}></Product>
            ))}
        </Container>
    )
}
