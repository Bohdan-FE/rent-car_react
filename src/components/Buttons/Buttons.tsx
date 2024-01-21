import HeartNormal from '../../icons/heartNormal.svg?react';
import HeartActive from '../../icons/heartActive.svg?react'
import { Car } from '../../types/cars';


export const LearnMoreBtn = () => {
    return (
        <button className="text-white flex items-center justify-center w-full h-11 bg-btnColor rounded-xl hover:bg-btnHover">Learn more</button>
    )
}

export const HeartBtnNormal = ({ handlerAddToFavorite, car }: { handlerAddToFavorite: (car: Car) => void, car: Car }) => {
    return (
        <button className='absolute top-[14px] right-[14px]' onClick={() => handlerAddToFavorite(car)}><HeartNormal /></button>
    )
}

export const HeartBtnActive = ({ handlerRemoveFavorite, car }: { handlerRemoveFavorite: (car: Car) => void, car: Car }) => {
    return (
        <button className='absolute top-[14px] right-[14px]' onClick={() => handlerRemoveFavorite(car)}><HeartActive /></button>
    )
}