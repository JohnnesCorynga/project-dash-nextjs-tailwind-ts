'use client'

import { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";
import { RiPlayListAddFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { version } from "../../../package.json";
import { FaList } from "react-icons/fa";
import { ButtonLogout } from "./ButtonLogout";

interface NavigateItem {
    label: string;
    route: string;
}
interface NavbarProps {

}
const navigate: NavigateItem[] = [
    { label: "Dashboard", route: "dashboard"},
    { label: "Products", route: "products"},
    { label: "Serviços", route: "services"},
    { label: "Usuários", route: "users"},
    { label: "Analytics", route: "analytics"},
    { label: "Configurações", route: "settings"},
]
export function Navbar(props : NavbarProps){
    const [ isOpenNavbar, setIsOpenNavbar ] = useState<boolean>(false)
    const [ clickedItem, setClickedItem ] = useState<string | null>(null);
    const [ windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    const handleItemClick = (route : string) =>{
        setClickedItem(route);
    } 
    const handleToggleSidebar = () =>{
        setIsOpenNavbar(!isOpenNavbar)
    }
    useEffect(()=>{
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[])
    return(
        <nav 
            className={`
                flex justify-between w-full h-[10%] py-5 px-2 relative items-center bg-slate-700
            `}
        >
            <div className="font-extrabold text-2xl">Nome da Empresa</div>
            <section 
                onClick={handleToggleSidebar}  
                className={` 
                    w-1/6 flex justify-center
                    ${windowWidth >= 800 ? 'hidden' : ''} 
                `}
            >

                <RiPlayListAddFill 
                    className={`
                        text-slate-100 text-4xl font-bold 
                        m-2 py-1 rounded
                        hover:text-slate-900 border border-r-slate-100 hover:bg-slate-100 hover:cursor-pointer 
                        ${ windowWidth >= 800 ? 'hidden' : ''}
                    `} 
                />
            </section>
            { windowWidth >= 800 ?
                <section
                    className={`
                        flex p-2 h-full
                        transition-all
                    `}
                >
                    <ul
                        className={`
                            flex flex-row items-center
                        `}
                    >
                        
                        {navigate.map((item, index) => (
                            <li 
                                key={index} 
                                onClick={()=> handleItemClick(item.route)}
                                className={`flex items-center text-sm text-slate-400 mx-2 p-1 
                                    border-b-2 hover:border-b-2 border-transparent 
                                    hover:border-white hover:cursor-pointer hover:text-white
                                    ${clickedItem ===item.route ? "text-white border-white" : ""} 
                                `}
                            >
                                {/* <span className="mr-2 text-2xl">{item.icon}</span> */}
                                <span className={`font-bold whitespace-nowrap`}>{item.label}</span>
                            </li>
                        ))}
                        <li
                            className={`
                                flex items-center text-sm text-slate-400 mx-2 p-2 
                                border-2 border-transparent rounded
                                hover:border-white hover:cursor-pointer hover:text-white
                            `}
                        >
                            <ButtonLogout />

                        </li>
                    </ul>
                </section>
            :
                <section
                    className={`
                        p-2 min-h-min
                        transition-all
                        ${ isOpenNavbar ? 'absolute z-20 flex right-0 top-[100%] bg-slate-600' : 'hidden'}

                    `}
                >
                    <ul
                        className={`
                            flex flex-row
                            ${ isOpenNavbar && windowWidth < 800 ? 'flex-col ' : ''}
                        `}
                    >
                        
                        {navigate.map((item, index) => (
                            <li 
                                key={index} 
                                onClick={()=> handleItemClick(item.route)}
                                className={`flex items-center text-sm text-slate-400 mx-2 p-1 
                                    border-b-2 hover:border-b-2 border-transparent 
                                    hover:border-white hover:cursor-pointer hover:text-white
                                    ${clickedItem ===item.route ? "text-white border-white" : ""} 
                                `}
                            >
                                {/* <span className="mr-2 text-2xl">{item.icon}</span> */}
                                <span className={`font-bold whitespace-nowrap`}>{item.label}</span>
                            </li>
                        ))}
                        <li
                            className={`
                                flex items-center text-sm text-slate-400 mx-2 p-1 
                                border-b-2 hover:border-b-2 border-transparent 
                                hover:border-white hover:cursor-pointer hover:text-white
                            `}
                        >
                            <ButtonLogout />

                        </li>
                    </ul>
                </section>
           }
        </nav>
    )
}