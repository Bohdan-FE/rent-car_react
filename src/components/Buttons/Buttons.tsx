import HeartNormal from '../../icons/heartNormal.svg?react';
import HeartActive from '../../icons/heartActive.svg?react'


export const LearnMoreBtn = () => {
    return (
        <button className="text-white flex items-center justify-center w-full h-11 bg-btnColor rounded-xl hover:bg-btnHover">Learn more</button>
    )
}

export const HeartBtn = () => {

    return (
        <button className='absolute top-[14px] right-[14px]'><HeartActive /></button>
    )
}