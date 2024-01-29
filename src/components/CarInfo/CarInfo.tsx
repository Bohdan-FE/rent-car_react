import { useEffect } from "react"
import { Car } from "../../types/cars"

export const CarInfo = ({ car }: { car: Car }) => {

    useEffect(() => {
        const portalDiv = document.createElement('div');
        portalDiv.classList.add('portal');
        document.body.appendChild(portalDiv);
        return () => {
            portalDiv.remove();
        }
    }, [])

    return (
        <div className="">
            <img src={car.img} alt={car.model} />

        </div>
    )
}