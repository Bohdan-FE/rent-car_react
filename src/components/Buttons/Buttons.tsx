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

export const SubmitBtn = () => {
    return (
        <button className="text-white flex items-center justify-center w-[136px] h-12 bg-btnColor rounded-[14px] hover:bg-btnHover" type='submit'>Search</button>
    )
}

export const LoadMoreBtn = ({ handleLoadMore }: { handleLoadMore: () => void }) => {
    return (
        <div className="flex justify-center mb-[150px]">
            <button className="font-medium leading-6 text-btnColor underline underline-offset-1 hover:text-btnHover" type='button' onClick={handleLoadMore}>Load more</button>
        </div>
    )
}