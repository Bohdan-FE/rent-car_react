import { useEffect, useState } from "react"
import { ModelSelect } from "../ModelSelect/ModelSelect"
import { PriceSelect } from "../PriceSelect/PriceSelect"
import { Car } from "../../types/cars"
import { getAllCars } from "../../api/api"
import { MileageInput } from "../MileageInput/MileageInput"
import { SubmitBtn } from "../Buttons/Buttons"


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

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }


    return (
        <div className="flex justify-center mb-[50px]">
            <form onSubmit={handlerSubmit} className="flex gap-x-[18px] items-end">
                <ModelSelect cars={cars} />
                <PriceSelect cars={cars} />
                <MileageInput />
                <SubmitBtn />
            </form>
        </div>
    )
}