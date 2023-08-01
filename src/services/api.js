import axios from "axios";

export const photoApi = axios.create({
    baseURL: "https://photo-fake-api.onrender.com/",
    timeout: 8 * 1000,
})