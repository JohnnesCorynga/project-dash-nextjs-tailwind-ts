import { IconType } from "react-icons";
interface CardSmallProps {
    title: string,
    subtitle?: string,
    quant?: number,
    bgColor?: string
    icon: IconType; // Use IconType do react-icons para representar um componente de ícone
}

export function CardSmall( { title, subtitle, quant, bgColor, icon: Icon } : CardSmallProps){
    const bgCor = bgColor || 'bg-emerald-500'
    return( 
        <div className={`
            w-2/5 h-32 text-sm p-2 
            sm:h-32 sm:w-44 sm:text-xl sm:p-4
            flex flex-col ${bgCor} rounded-lg drop-shadow-lg text-black
            relative overflow-hidden
        `}
        >
            <h2 className={`font-bold text-white z-10`}>{quant}</h2>
            <p className="text-white z-10">{title}</p>
            <Icon className={`absolute text-6xl opacity-20 right-3 bottom-3 z-1`}/>
        </div>
    )
}