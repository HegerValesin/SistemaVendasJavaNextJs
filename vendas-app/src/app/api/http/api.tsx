import Axios, { AxiosInstance } from 'axios'

export const httpCliente: AxiosInstance = Axios.create({
    baseURL: "http://hegervfp.local:8080"
})

