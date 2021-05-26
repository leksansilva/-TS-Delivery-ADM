import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.rokugan.fun/index.html',
    
})

export default api;