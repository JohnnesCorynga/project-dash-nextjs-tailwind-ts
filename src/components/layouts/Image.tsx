interface ImageProps {
    src: string
}
export function Image(props : ImageProps){
    return(
        <div className="w-16 h-25 md:w-32 md:h-32 lg:w-48 lg:h-48 p-5 bg-slate-300 rounded">
            <img className="rounded" src={props.src}  />
        </div>
    )
}