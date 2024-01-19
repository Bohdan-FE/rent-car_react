import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCarsThunk } from "../../redux/thunk"
import { carsSelector } from "../../redux/selectors"

export const CarList = () => {
    const dispatch = useDispatch()
    const cars = useSelector(carsSelector)

    useEffect(() => {
        dispatch(getCarsThunk())
    }, [])

    return (
        <ul>
            {cars.map(car => <li key={car.id}><p>{car.make}</p><img src={car.img} alt={car.make} /></li>)}
        </ul>
    )
}