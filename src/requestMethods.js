import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";
let TOKEN = '';
const storedData = localStorage.getItem("persist:root");
if (storedData) {
    const { user } = JSON.parse(storedData);
    if (user && user.currentUser) {
        TOKEN = user.currentUser.accessToken;
    }
}
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
})



