import React from 'react'
import { BiLogOut } from 'react-icons/bi'

type ButtonLogoutProps = {
    color?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonLogout(
    {
        children,
        className,
        onClick,
        color,
        ...rest
    } : ButtonLogoutProps){
    return(
        <button 
            {...rest}
            onClick={onClick}
            className={` 
                text-white whitespace-nowrap flex flex-row flex-nowrap
            `}  
        >
            <BiLogOut className="mr-1 text-lg"/> Sair 
        </button>
    )
}