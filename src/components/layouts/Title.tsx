interface TitleProps {
    children: React.ReactNode
}
export function Title({ children } : TitleProps){
    return(
        <h1 className="text-4xl font-extrabold mb-3">
            {children}
        </h1>
    )
}
export function SubTitle({ children } : TitleProps){
    return(
        <h2 className="text-lg font-medium text-stone-500 mb-3">
            {children}
        </h2>
    )
}