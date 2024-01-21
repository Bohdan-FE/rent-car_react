import axios from "axios";
import { Car } from "../types/cars";

axios.defaults.baseURL = 'https://65a98867219bfa3718696a58.mockapi.io/api'

export const getCars = async (page: number | undefined, model: string | undefined, rentalPrice: string | undefined, mileageFrom: string | undefined, mileageTo: string | undefined, limit: number | undefined = 12): Promise<Car[]> => {
    
    const response = await axios(`/cars/`, { params: { page, limit, model, rentalPrice } })
    return response.data
}

export const getAllCars = async (): Promise<Car[]> => {
    const response = await axios(`/cars`)
    return response.data
}