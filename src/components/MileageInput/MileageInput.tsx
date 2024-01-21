import { ChangeEvent, FormEvent, useEffect, useState } from "react"

export const MileageInput = () => {
    const [fromValue, setFromValue] = useState<string>('')
    const [toValue, setToValue] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const sanitizedValue = e.target.value.replace(/[^0-9,.]/g, '');
        const formattedValue = new Intl.NumberFormat('en-US').format(Number(sanitizedValue.replace(/,/g, '')));
        if (e.target.id === 'from') {
            setFromValue(formattedValue)
        }
        if (e.target.id === 'to') {
            setToValue(formattedValue)
        }
    }

    return (
        <div>
            <p className="text-[14px] text-greyText mb-2">Сar mileage / km</p>
            <div className="flex">
                <div className="relative">
                    <input className="w-[160px] h-[48px] pl-[72px] text-[18px] leading-5 font-medium bg-selectBg rounded-tl-[14px] rounded-bl-[14px] focus:outline-none border-r-[1px] border-r-inputBorder"
                        type="text" id="from" value={fromValue} onChange={onChange} />
                    <label className="absolute text-[18px] leading-5 font-medium top-[14px] left-6">From</label>
                </div>
                <div className="relative">
                    <input className="relative w-[160px] h-[48px] pl-[48px] text-[18px] leading-5 font-medium bg-selectBg rounded-tr-[14px] rounded-br-[14px] focus:outline-none"
                        type="text" id="to" value={toValue} onChange={onChange} />
                    <label className="absolute text-[18px] leading-5 font-medium top-[14px] left-6">To</label>
                </div>
            </div>
        </div>
    )
}