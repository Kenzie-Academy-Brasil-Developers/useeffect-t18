import axios from "axios";

export const fruitApi = axios.create({
    baseURL: "https://fruit-fake-api.onrender.com",
    timeout: 8 * 1000,
})

// H * M * S * MS

export const blogApi = axios.create({
    baseURL: "https://blog-fake-api.onrender.com",
    timeout: 8 * 1000,
})