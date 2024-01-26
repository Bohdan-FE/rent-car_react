import { CarList } from "../../components/CarList/CarList"
import { useEffect } from "react"
import { getCarsThunk, getNextPageThunk } from "../../redux/thunk"
import { useAppDispatch } from "../../redux/store"
import { useSelector } from "react-redux"
import { carsSelector, paramsSelector } from "../../redux/selectors"
import { FilterForm } from "../../components/FilterForm/FilterForm"
import { LoadMoreBtn } from "../../components/Buttons/Buttons"
import { changePage } from "../../redux/paramsSlice"


export const Catalog = () => {
    const dispatch = useAppDispatch()
    const cars = useSelector(carsSelector)
    const params = useSelector(paramsSelector)

    useEffect(() => {
        dispatch(getCarsThunk(params))
    }, [params.model, params.rentalPrice])

    const handleLoadMore = () => {
        dispatch(getNextPageThunk({ ...params, page: params.page + 1 }))
        dispatch(changePage(params.page + 1))
    }
    console.log(cars)
    return (
        <div className="container mx-auto px-[6px]">
            <FilterForm />
            {cars.error ? <div><p>{cars.error}</p></div> : <CarList cars={cars.cars} />}
            {params.page < 3 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
        </div>
    )
}