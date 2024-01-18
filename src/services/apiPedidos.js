import axios from "axios";

const apiPedidos = axios.create({
    baseURL: 'http://localhost:8080'
});

export default apiPedidos;

