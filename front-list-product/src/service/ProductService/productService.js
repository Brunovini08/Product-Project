import axios from "axios";

const apiURL = "http://localhost:3000"

export const productService = {
     async createProduct(data) {
        const endpoint = `${apiURL}/create`
        return axios.post(endpoint, data)
    },

     async getProduct() {
        const endpoint = `${apiURL}/allProducts`
        return axios.get(endpoint)
    },

     async getProductById(id) {
        const endpoint = `${apiURL}/getProduct/${id}`
        return axios.get(endpoint)
    }
}