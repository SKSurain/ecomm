import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";

// Function to get the token from local storage
const getToken = () => {
    const root = localStorage.getItem("persist:root");
    if (root) {
        const parsedRoot = JSON.parse(JSON.parse(root));
        if (parsedRoot.user && parsedRoot.user.currentUser) {
            return parsedRoot.user.currentUser.accessToken;
        }
    }
    return null;
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

// Function to get axios instance with attached token
export const userRequest = () => {
    const TOKEN = getToken();
    if (TOKEN) {
        return axios.create({
            baseURL: BASE_URL,
            headers: { token: `Bearer ${TOKEN}` },
        });
    }
    // Handle case when there is no token
    throw new Error("User is not logged in");
}
