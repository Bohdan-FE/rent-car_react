import { CarCard } from "../CarCard/CarCard"
import { Car } from "../../types/cars"

export const CarList = ({ cars }: { cars: [] | Car[] }) => {


    return (
        <ul className="grid grid-cols-4 gap-x-[29px] gap-y-[50px] mb-[100px]">
            {cars.map(car => <CarCard key={car.id} car={car} />)}
        </ul>
    )
}