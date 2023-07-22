import { useDispatch } from "react-redux"
import { logout } from '../redux/apiCalls'
import styled from "styled-components";


const Container = styled.div`
width: 100vw;
height: 100vh;
display:flex;
justify-content: center;
align-items: center; 
`;
const Button = styled.button`
    padding: 0.5em;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;`
const Logout = () => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        logout(dispatch);
    }

    return <Container>
        <Button onClick={handleClick}>Logout</Button>
    </Container>
}

export default Logout;