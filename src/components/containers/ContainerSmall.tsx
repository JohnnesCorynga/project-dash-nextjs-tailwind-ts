interface ContainerSmallProps {}
export function ContainerSmall({children} : React.PropsWithChildren<ContainerSmallProps>){
    return(
        <section 
            className={`
                flex flex-wrap items-center justify-between gap-4 w-screen min-h-min px-5 py-4
               
            `}
        >
            {children}
        </section>
    )
}