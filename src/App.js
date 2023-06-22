import './App.css';
import Home from "./pages/Home"
import { createGlobalStyle } from 'styled-components';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Cart } from './pages/Cart'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Urbanist',sans-serif;
}`
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
