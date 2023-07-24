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
import { useSelector } from 'react-redux';
import Logout from './pages/Logout';



const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Urbanist',sans-serif;
}`
function App() {

  const user = useSelector(state => state.user.currentUser);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/products" element={user ? <ProductList /> : <Navigate to="/login" />} />
          <Route path="/products/:category" element={user ? <ProductList /> : <Navigate to="/login" />} />
          <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
          <Route path="/product" element={user ? <Product /> : <Navigate to="/login" />} />
          <Route path="/product/:id" element={user ? <Product /> : <Navigate to="/login" />} />
          <Route path="/success" element={user ? <Success /> : <Navigate to="/login" />} />
        </Routes>

      </Router >

    </>
  );
}

export default App;
