import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTMyMzdjNzkwM2RmODhiZDdmZjMzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzY3MDkzMCwiZXhwIjoxNjg3OTMwMTMwfQ.gEXnlWnzE11dVs7_teHCqTApwUlWUN4afASFQ_5sRHM";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
})