import React, { useState } from "react";
import { IconType } from "react-icons";
interface CardProps {
    title: string,
    subtitle?: string,
    quant: number,
    icon: IconType; // Use IconType do react-icons para representar um componente de ícone
}

export function Card({ title, subtitle, quant, icon: Icon } : CardProps){
    
    return( 
        <div className={`
            flex flex-col p-5 h-40 w-44 bg-emerald-500 rounded-lg text-black
            relative
        `}
        >
            <h2 className={`font-bold text-3xl`}>{quant}</h2>
            <p className="text-white z-10">{title}</p>
            <Icon className={`absolute text-8xl opacity-20 right-3 bottom-3 z-0`}/>
        </div>
    )
}