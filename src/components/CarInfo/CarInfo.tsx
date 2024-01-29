import { createPortal } from 'react-dom';
import { Car } from "../../types/cars"

export const CarInfo = ({ car }: { car: Car }) => {
    const portalContainer = document.getElementById('portal');

    if (!portalContainer) {
        return
    }

    return createPortal(
        <div className="absolute top-0 left-0 w-full h-full">
            <img src={car.img} alt={car.model} />
        </div>
        , portalContainer
    )

}