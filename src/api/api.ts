import axios from "axios";
import { Car } from "../types/cars";

axios.defaults.baseURL = 'https://65a98867219bfa3718696a58.mockapi.io/api'

export const getCars = async (page: number, limit: number): Promise<Car[]> => {
    const response = await axios(`/cars/?page=${page}&limit=${limit}`)
    return response.data
}