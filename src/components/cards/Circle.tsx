import { FaUsers } from "react-icons/fa6";
interface CircleProps {
    title: string,
    subtitle?: string,
    quant: number
}

export function Circle(props : CircleProps){
    const { title, quant} = props;
    return(
        <div className={`
            flex flex-col p-8 h-44 w-40 bg-emerald-500 rounded-full text-black
        `}>
            <h2 className={`font-black text-3xl`}>{quant}</h2>
            <p>{title}</p>
            <FaUsers />
        </div>
    )
}