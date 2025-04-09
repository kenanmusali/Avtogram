import axios from 'axios';
let apiUrl = import.meta.env.VITE_GLOBAL_API;
// let apiUrl = import.meta.env.VITE_LOCAL_API;
export const api = axios.create({
    baseURL: apiUrl
});