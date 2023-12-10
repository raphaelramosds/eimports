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

    static async DeleteCategory({ token, id }: { token: string, id: number }) {
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

    static async CreateProduct({ token, name, description, category_id, quotation, stock }:
        { token: string, name: string, description: string, category_id: number, quotation: string, stock: number }) {
        const response = await axios.post(`${URL}/products`,
            { name, description, category_id, quotation, stock }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static async GetProducts({ token }: { token: string }) {
        const response = await axios.get(`${URL}/products`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static async DeleteProduct({ token, id }: { token: string, id: number }) {
        const response = await axios.delete(`${URL}/products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static async CreateOC({ token, client_id, products }: {
        token: string, client_id: number, products: Array<{
            id: number,
            price: number,
            quantity: number,
        }>
    }) {
        const response = await axios.post(`${URL}/purchase-orders/products`, {
            orderData: {
                client_id
            },
            productsData: products
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static async GetSales({ token }: { token: string }) {
        const response = await axios.get(`${URL}/purchase-orders`, {
            params : {
                expand: 'products'
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static async GetTurnover({ token, product_id }: { token: string, product_id: number }) {
        const response = await axios.get(`${URL}/products/turnover/${product_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
}