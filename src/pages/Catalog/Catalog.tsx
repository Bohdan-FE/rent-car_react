import { CarList } from "../../components/CarList/CarList"
import { useEffect } from "react"
import { getCarsThunk } from "../../redux/thunk"
import { useAppDispatch } from "../../redux/store"
import { useSelector } from "react-redux"
import { carsSelector } from "../../redux/selectors"
import { FilterForm } from "../../components/FilterForm/FilterForm"

export const Catalog = () => {
    const dispatch = useAppDispatch()
    const cars = useSelector(carsSelector)

    useEffect(() => {
        dispatch(getCarsThunk(1))
    }, [])

    return (
        <div className="container mx-auto px-[6px]">
            <FilterForm />
            <CarList cars={cars} />
        </div>
    )
}