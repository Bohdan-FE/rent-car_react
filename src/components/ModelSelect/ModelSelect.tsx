import { useEffect, useState } from "react"
import ArrowSvg from '../../icons/arrowIcon.svg?react'
import { Car } from "../../types/cars"

export const ModelSelect = ({ cars, setSelectedModel, selectedModel }: { cars: Car[] | [], setSelectedModel: React.Dispatch<React.SetStateAction<string>>, selectedModel: string }) => {
    const [models, setModels] = useState<[] | string[]>([])
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        const models = new Set(cars.map(car => car.model))
        setModels([...models])
    }, [cars])

    return (
        <div>
            <p className="text-[14px] text-greyText mb-2">Car brend</p>
            <div className="w-[224px] h-[48px] relative text-[18px] leading-5 font-medium">
                <div className="px-[18px] py-[14px] rounded-[14px] bg-selectBg flex items-center justify-between cursor-pointer" onClick={() => setIsActive(!isActive)}>
                    <p>{selectedModel ? selectedModel : 'Enter text'}</p>
                    <ArrowSvg className={`${isActive && 'rotate-180'}`} />
                </div>
                {isActive && <div className="h-[272px] w-full pl-[18px] pr-2 py-[14px] bg-white absolute top-[52px] z-10 rounded-[14px] left-0 border-[1px] border-[rgba(18, 20, 23, 0.05)] overflow-hidden">
                    <div className="overflow-y-scroll h-full text-[16px] text-greyText">
                        {models.map(model =>
                            <div className="mb-2 last:mb-0" key={model}>
                                <input type="radio" id={model} name='model' value={model} hidden checked={selectedModel === model} onChange={() => { setSelectedModel(model); setIsActive(!isActive) }} />
                                <label htmlFor={model} className={`cursor-pointer ${selectedModel === model && 'text-blackText'}`}>{model}</label>
                            </div>)}
                    </div>
                </div>}
            </div>
        </div>
    )
}