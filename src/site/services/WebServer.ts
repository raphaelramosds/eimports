import axios from "axios";

const URL = 'http://localhost:8080'

export class WebServer {

    static async GetSellers() {
        const response = await axios.get(`${URL}/sellers`, {
            auth: {
                username: 'admin',
                password: 'root',

            },
        })

        return response.data
    }

    static async Login({ login, password }: { login: string, password: string }) {
        const response = await axios.post(`${URL}/sellers/login`, {
            login, password
        })
        return response.data
    }

    static async GetCategories({ token }: { token: string }) {
        const response = await axios.get(`${URL}/categories`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static async DeleteCategory({ token, id }: { token: string, id: string }) {
        const response = await axios.delete(`${URL}/categories/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static async CreateCategory({ token, description }: { token: string, description: string }) {
        const response = await axios.post(`${URL}/categories`,
            { description }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static async CreateProduct({ token, name, description }: { token: string, name: string, description: string }) {
        const response = await axios.post(`${URL}/categories`,
            { name, description }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static async GetProducts({ token }: { token: string }) {
        const response = await axios.get(`${URL}/categories`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
}