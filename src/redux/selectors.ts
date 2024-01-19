import { Car } from "../types/cars";

interface carState {
    cars: {
        cars: Car[] | []
    }
}

export const carsSelector = (state: carState) => state.cars.cars