interface CardBigProps {
    children: React.ReactNode
    icon?: any; // Use IconType do react-icons para representar um componente de ícone
}

export function CardBig( {children, icon: Icon}: CardBigProps){
    
    return( 
        <div className={`
            w-full h-80 lg:w-4/6
            flex flex-col p-5 bg-white rounded-lg drop-shadow-lg text-black
            relative overflow-hidden
        `}
        >
        {children}
        {/* <Icon className={`absolute text-8xl opacity-20 right-3 bottom-3 z-0`}/> */}
    </div>
    )
}