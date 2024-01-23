import axios from "axios";
import { Car } from "../types/cars";

axios.defaults.baseURL = 'https://65a98867219bfa3718696a58.mockapi.io/api'

export const getCars = async (params: Params, limit: number | undefined = 12): Promise<Car[]> => {
    
    const response = await axios(`/cars/`, {params: {...params, limit}})
    return response.data
}

export const getAllCars = async (): Promise<Car[]> => {
    const response = await axios(`/cars`)
    return response.data
}