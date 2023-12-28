import { IconType } from "react-icons";
interface CardMediumProps {
    children: React.ReactNode
    icon?: any; // Use IconType do react-icons para representar um componente de ícone
}

export function CardMedium({children, icon: Icon} : CardMediumProps){
    
    return( 
        <div className={`
            w-full h-80 lg:w-1/4
            flex flex-col p-5 bg-teal-500 rounded-lg drop-shadow-lg text-black
            relative overflow-hidden
        `}
        >
            {children}
            <Icon className={`absolute text-8xl opacity-20 right-3 bottom-3 z-0`}/>
        </div>
    )
}