import { useEffect, useState } from "react"
import { addToFavorite, removeFavorite } from "../../redux/favoriteCarsSlice"
import { useAppDispatch } from "../../redux/store"
import { Car } from "../../types/cars"
import { HeartBtnActive, HeartBtnNormal, LearnMoreBtn } from "../Buttons/Buttons"
import { useSelector } from "react-redux"
import { favoriteCarsSelector } from "../../redux/selectors"

const classAfter = "flex after:content-[''] after:block after:h-4 after:w-[1px] after:bg-greySpace after:mx-2"

export const CarCard = ({ car }: { car: Car }) => {
    const { img, make, model, rentalPrice, address, rentalCompany, type, mileage, functionalities, year } = car
    const [isActive, setIsActive] = useState<false | true>(false)
    const favoriteCars = useSelector(favoriteCarsSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (favoriteCars.find(fcar => fcar.id === car.id)) {
            setIsActive(true)
            return
        }
        setIsActive(false)
    }, [favoriteCars])

    const handlerAddToFavorite = (car: Car) => {
        dispatch(addToFavorite(car))
    }

    const handlerRemoveFavorite = (car: Car) => {
        dispatch(removeFavorite(car.id))
    }

    const country = address.split(', ')[2]
    const city = address.split(', ')[1]

    return (
        <li className="overflow-hidden">
            <div className="h-[274px] overflow-hidden rounded-[14px] mb-[14px] relative">
                <img className="object-cover object-center h-[274px]" src={img} alt={make} loading="lazy" height={274} />
                {!isActive ?
                    <HeartBtnNormal handlerAddToFavorite={handlerAddToFavorite} car={car} /> :
                    <HeartBtnActive handlerRemoveFavorite={handlerRemoveFavorite} car={car} />}
            </div>
            <div className="flex justify-between mb-2 whitespace-nowrap">
                <p className="font-medium">{make}{' '}<span className="text-blueText">{model}</span>,{' '}{year}</p>
                <p className="font-medium">{rentalPrice}</p>
            </div>
            <div className="text-xs text-greyText whitespace-nowrap mb-7">
                <div className="flex mb-1">
                    <p className={classAfter}>{country}</p>
                    <p className={classAfter}>{city}</p>
                    <p>{rentalCompany}</p>
                </div>
                <div className="flex">
                    <p className={classAfter}>{type}</p>
                    <p className={classAfter}>{make}</p>
                    <p className={classAfter}>{mileage}</p>
                    <p>{functionalities[0]}</p>
                </div>
            </div>
            <LearnMoreBtn />
        </li>
    )
}