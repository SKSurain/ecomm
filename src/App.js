import './App.css';
import Home from "./pages/Home"
import { createGlobalStyle } from 'styled-components';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Cart } from './pages/Cart'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from './pages/Home';
import Success from './pages/Success';



const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Urbanist',sans-serif;
}`
function App() {

  const user = true;

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/register" element=
            {user ? <Navigate to="/" /> : <Register />} />
          <Route path="/login" element=
            {user ? <Navigate to="/" /> : <Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
