import { Car } from "../types/cars";

interface CarState {
    cars: {
        cars: Car[] | []
        error: string | null 
    } 
}

interface FavoriteCarState {
    favoriteCars: {
        favoriteCars: Car[] | []
    }
}

interface ParamsState {
    params: {
        params: {
            page: number;
            model?: string;
            rentalPrice?: string;
        } 
    }
}

export const carsSelector = (state: CarState) => state.cars

export const favoriteCarsSelector = (state: FavoriteCarState) => state.favoriteCars.favoriteCars

export const paramsSelector = (state: ParamsState) => state.params.params