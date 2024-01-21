import { useEffect, useState } from "react"
import { ModelSelect } from "../ModelSelect/ModelSelect"
import { PriceSelect } from "../PriceSelect/PriceSelect"
import { Car } from "../../types/cars"
import { getAllCars } from "../../api/api"
import { MileageInput } from "../MileageInput/MileageInput"


export const FilterForm = () => {
    const [cars, setCars] = useState<Car[] | []>([])

    useEffect(() => {
        async function getCars() {
            try {
                const cars = await getAllCars()
                setCars(cars)
            }
            catch (error) {
                console.log(error)
            }
        }
        getCars()
    }, [])

    return (
        <div className="flex justify-center align-middle mb-[50px]">
            <form action="" className="flex gap-x-[18px]">
                <ModelSelect cars={cars} />
                <PriceSelect cars={cars} />
                <MileageInput />
            </form>
        </div>
    )
}