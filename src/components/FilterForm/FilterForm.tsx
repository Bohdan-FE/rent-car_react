import { useEffect, useState } from "react"
import { ModelSelect } from "../ModelSelect/ModelSelect"
import { PriceSelect } from "../PriceSelect/PriceSelect"
import { Car } from "../../types/cars"
import { getAllCars } from "../../api/api"
import { MileageInput } from "../MileageInput/MileageInput"
import { SubmitBtn } from "../Buttons/Buttons"
import { useAppDispatch } from "../../redux/store"
import { changeParams } from "../../redux/paramsSlice"



export const FilterForm = () => {
    const [cars, setCars] = useState<Car[] | []>([])
    const [selectedModel, setSelectedModel] = useState<string>('');
    const [selectedPrice, setSelectedPrice] = useState<string>('');
    const dispatch = useAppDispatch()

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

    const handlerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(changeParams({ model: selectedModel, rentalPrice: selectedPrice }))
    }


    return (
        <div className="flex justify-center mb-[50px]">
            <form onSubmit={handlerSubmit} className="flex gap-x-[18px] items-end">
                <ModelSelect cars={cars} setSelectedModel={setSelectedModel} selectedModel={selectedModel} />
                <PriceSelect cars={cars} setSelectedPrice={setSelectedPrice} selectedPrice={selectedPrice} />
                <MileageInput />
                <SubmitBtn />
            </form>
        </div>
    )
}