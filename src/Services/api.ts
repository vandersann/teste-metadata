
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakeapi.platzi.com/en/',
});

export default api;
