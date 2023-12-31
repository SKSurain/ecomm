import styled from 'styled-components';
import { Navbar } from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
import { mobile } from '../responsive'
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethods'
import axios from 'axios'
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"

const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display:flex;
${mobile({ flexDirection: "column", padding: "10px" })};`;
const ImageContainer = styled.div`
flex: 1;`;
const Image = styled.img`
width: 100%;
height: 80vh;
object-fit: cover;
${mobile({ height: "40vh" })};
`;
const InfoContainer = styled.div`
flex: 1;
padding:0px 50px
${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
font-weight: 200;`;
const Description = styled.p`
margin: 20px 0px;`;
const Price = styled.div`
font-weight: 100;
font-size: 40px;`;

const FilterContainer = styled.div`
width: 50%;
margin:30px 0px;
display:flex;
justify-content: space-between;
${mobile({ width: "95%" })};
`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight:200;`;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor:pointer;`;
const Filter = styled.div`
display:flex; 
align-items:center;`;
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
width: 50%;
display:flex;
align-items:center;
justify-content: space-between;
${mobile({ width: "95%" })};
`;
const AmountContainer = styled.div`
display:flex;
align-items: center;
font-weight: 700;`;
const Amount = styled.span`
width: 30px;
heigh:30px;
border-radius: 10px;
border: 1px solid teal;
display:flex;
justify-content: center;
margin: 0px 5px;`;
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white; 
cursor: pointer; 
font-weight: 500;

&:hover{
    background-color:#f8f4f4;  
}
`;

export const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("products/find/" + id)
                setProduct(res.data);
            } catch (err) {

            }
        }
        getProduct();
    }, [id])

    const handleQuantity = (type) => {
        if (type === "dec" && quantity > 1) {
            setQuantity(quantity - 1)
        } else if (type === "inc" && quantity < 15) {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity: quantity, color, size }))

    }


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img ?
                        product.img
                        :
                        "https://images.unsplash.com/photo-1577660002965-04865592fc60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title ? product.title : "Denim Jacket"}</Title>
                    <Description>{product.description ?
                        product.description :
                        "This navy blue jacket will make you look stylish, strong and beautiful."}</Description>
                    <Price>{product.price ?
                        product.price :
                        "RM 150.00"}
                    </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color ?
                                product.color.map(c => (
                                    <FilterColor color={c} key={c} onClick={() => setColor(c)}></FilterColor>
                                )) :
                                <FilterColor color='black' onClick={() => { setColor("black"); }}></FilterColor>}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onClick={(e) => setSize(e.target.value)}>
                                {product.size ?
                                    product.size.map(s => (
                                        <FilterSizeOption key={s} >{s}</FilterSizeOption>
                                    )) : <FilterSizeOption>S</FilterSizeOption>}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container >
    )
}
