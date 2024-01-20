import { CarList } from "../../components/CarList/CarList"
import { useEffect } from "react"
import { getCarsThunk } from "../../redux/thunk"
import { useAppDispatch } from "../../redux/store"

export const Catalog = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCarsThunk())
    }, [])
    return (
        <div className="container mx-auto px-[6px]"><CarList /></div>
    )
}