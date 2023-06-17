import './App.css';
import Home from "./pages/Home"
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Urbanist',sans-serif;
}`
function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
