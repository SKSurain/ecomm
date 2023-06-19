import './App.css';
import Home from "./pages/Home"
import { createGlobalStyle } from 'styled-components';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Cart } from './pages/Cart'
const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Urbanist',sans-serif;
}`
function App() {
  return (
    <>
      <GlobalStyle />
      <Cart />
    </>
  );
}

export default App;
