import { useSelector } from "react-redux"
import { favoriteCarsSelector } from "../../redux/selectors"
import { CarList } from "../../components/CarList/CarList"

export const Favorites = () => {
    const cars = useSelector(favoriteCarsSelector)

    return (
        <div className="container mx-auto px-[6px]"><CarList cars={cars} /></div>
    )
}