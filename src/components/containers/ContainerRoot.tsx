interface ContainerRootProps {}
export function ContainerRoot({children} : React.PropsWithChildren<ContainerRootProps>){
    return(
        <section className="flex flex-wrap w-screen h-full bg-slate-200 overflow-y-auto">
            {children}
        </section>
    )
}