import axios from "axios";
import { Car } from "../types/cars";

axios.defaults.baseURL = 'https://65a98867219bfa3718696a58.mockapi.io/api'

export const getCars = async (page: number | undefined, limit: number | undefined): Promise<Car[]> => {
    const response = await axios(`/cars/?page=${page}&limit=${limit}`)
    return response.data
}

export const getAllCars = async (): Promise<Car[]> => {
    const response = await axios(`/cars`)
    return response.data
}