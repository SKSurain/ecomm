import './App.css';
import Home from "./pages/Home"
import { createGlobalStyle } from 'styled-components';
import { ProductList } from './pages/ProductList';
const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Urbanist',sans-serif;
}`
function App() {
  return (
    <>
      <GlobalStyle />
      <ProductList />
    </>
  );
}

export default App;
