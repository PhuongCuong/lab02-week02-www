import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/week02/',

});



export default instance;