import axios from 'axios'

export const HTTP = axios.create({
    baseURL: "http://localhost:3000/",
    //baseURL: "http://192.168.1.242:3000/",
})