import { Car } from "../types/cars";

interface carState {
    cars: {
        cars: Car[] | []
    }
}

interface favoriteCarState {
    favoriteCars: {
        favoriteCars: Car[] | []
    }
}

export const carsSelector = (state: carState) => state.cars.cars


export const favoriteCarsSelector  = (state: favoriteCarState) => state.favoriteCars.favoriteCars