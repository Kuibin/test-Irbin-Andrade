import axios from "axios";

// Use la libreria Axios para facilitar las consultas

//base de la peticion
const emailsApi = axios.create({
    baseURL: 'http://localhost:3000'
})

//'Productos' que pedimos a consultar de forma asincrona y exportada para ser llamada de otros datos
export const getEmails = async() => {
    const res = await emailsApi.get('/emails');
    return res.data;
}