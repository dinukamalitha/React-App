import axios from "axios";

//base URL
const instance = axios.create({
    //baseurl
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default instance;