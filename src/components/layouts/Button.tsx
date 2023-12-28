import { twMerge } from "tailwind-merge"
import React from 'react'
const Colors = {
    submit: 'bg-blue-600 hover:bg-blue-700',
    cancel: 'bg-red-500',
    warning: ' bg-yellow-600',
    info: 'bg-green-400',
    none: 'bg-transparent',
}
type ButtonProps = {
    color?: 'cancel' | 'submit' | 'warning' | 'info' | 'none';

} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button(
    {
        children,
        className,
        color ='submit',
        onClick,
        ...rest
    } : ButtonProps){
        const colorButton = Colors[color]
    return(
        <button 
            {...rest}
            onClick={onClick}
            className={twMerge(
                `inline-flex text-white bg-blue-600 hover:bg-blue-700 border-0 py-1.5 px-6 
                focus:outline-none rounded text-lg `,
                className,
                colorButton
                )
            }  
        >
            { children }
        </button>
    )
}