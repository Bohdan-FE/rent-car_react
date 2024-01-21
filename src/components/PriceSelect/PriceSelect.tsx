import { useEffect, useState } from "react"
import ArrowSvg from '../../icons/arrowIcon.svg?react'
import { extractNumberFromString } from "../../helpers/extractNumber"
import { Car } from "../../types/cars"

export const PriceSelect = ({ cars }: { cars: Car[] | [] }) => {
    const [prices, setPrices] = useState<[] | string[]>([])
    const [isActive, setIsActive] = useState<boolean>(false)
    const [selectedPrice, setSelectedPrice] = useState<string>('');

    useEffect(() => {
        const pricesString = new Set(cars.map(car => car.rentalPrice))
        const priceStringArray = [...pricesString]
        const pricesNumber = priceStringArray.map(price => extractNumberFromString(price))
        const validPricesNumber: string[] = pricesNumber.filter((price) => price !== null) as string[];
        const sortedData: string[] = validPricesNumber.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
        setPrices(sortedData)
    }, [cars])

    return (
        <div>
            <p className="text-[14px] text-greyText mb-2">Price/ 1 hour</p>
            <div className="w-[125px] h-[48px] relative text-[18px] leading-5 font-medium">
                <div className="px-[18px] py-[14px] rounded-[14px] bg-selectBg flex items-center justify-between cursor-pointer" onClick={() => setIsActive(!isActive)}>
                    <p>{`To ${selectedPrice}$`}</p>
                    <ArrowSvg className={`${isActive && 'rotate-180'}`} />
                    <input type="text" id="price" hidden defaultValue={selectedPrice} />
                </div>
                {isActive && <div className="h-[272px] w-full pl-[18px] pr-2 py-[14px] bg-white absolute top-[52px] z-10 rounded-[14px] left-0 border-[1px] border-[rgba(18, 20, 23, 0.05)] overflow-hidden">
                    <div className="overflow-y-scroll h-full text-[16px] text-greyText">
                        {prices.map(price =>
                            <div className="mb-2 last:mb-0" key={price}>
                                <input type="radio" id={price} name='model' value={price} hidden checked={selectedPrice === price} onChange={() => { setSelectedPrice(price); setIsActive(!isActive) }} />
                                <label htmlFor={price} className={`cursor-pointer ${selectedPrice === price && 'text-blackText'}`}>{price}</label>
                            </div>)}
                    </div>
                </div>}
            </div>
        </div>

    )
}