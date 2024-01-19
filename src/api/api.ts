import axios from "axios";

axios.defaults.baseURL = 'https://65a98867219bfa3718696a58.mockapi.io/api'

export const getCars = async () => {
    const response = await axios('/cars')
    return response.data
}