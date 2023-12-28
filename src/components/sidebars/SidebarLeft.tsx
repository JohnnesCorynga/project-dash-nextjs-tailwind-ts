'use client'
import { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { MdDashboard, MdOutlineMiscellaneousServices, MdProductionQuantityLimits, MdSettings } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiPlayListAddFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
// import { version } from "../../../package.json";

interface NavigateItem {
    label: string;
    icon: React.ReactNode; // Tipo para componentes React
    route: string;
}

interface SidebarLeftProps {

}
const navigate: NavigateItem[] = [
    { label: "Dashboard", icon: <MdDashboard/>, route: "dashboard"},
    { label: "Products", icon: <MdProductionQuantityLimits/>, route: "products"},
    { label: "Serviços", icon: <MdOutlineMiscellaneousServices/>, route: "services"},
    { label: "Usuários", icon: <FaUsers/>, route: "users"},
    { label: "Analytics", icon: <TbBrandGoogleAnalytics />, route: "analytics"},
    { label: "Configurações", icon: <MdSettings/>, route: "settings"},
]
export function SidebarLeft(props : SidebarLeftProps){
    const [ isOpenSidebar, setIsOpenSidebar ] = useState<boolean>(true)
    const [ clickedItem, setClickedItem ] = useState<string | null>(null);
    const [ windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    const handleItemClick = (route : string) =>{
        setClickedItem(route);
    } 
    const handleToggleSidebar = () =>{
        setIsOpenSidebar(!isOpenSidebar)
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
        <>
            <section 
                onClick={handleToggleSidebar}  
                className={` 
                    w-1/6 flex justify-center bg-slate-900
                    ${windowWidth >= 600 ? 'hidden' : ''} 
                `}
            >

                <RiPlayListAddFill 
                    className={`
                      bg-slate-900 text-slate-100 text-4xl font-bold 
                        m-2 py-1 rounded
                        hover:text-slate-900 border border-r-slate-100 hover:bg-slate-100 hover:cursor-pointer 
                        ${isOpenSidebar == true && windowWidth >= 600 ? 'hidden' : ''}
                    `} 
                />
            </section>
            <section
                className={`
                    flex flex-col p-2 h-full ${isOpenSidebar ? 'w-56' : 'w-16'}
                    bg-slate-900 border-r border-gray-400
                    transition-all z-20
                    ${isOpenSidebar == false && windowWidth < 600 ? 'hidden flex-none' : ''}
                    ${isOpenSidebar == true && windowWidth < 600 ? "absolute w-52":""}
                `}
            >
                <ul
                    className={`
                        flex flex-col
                    `}
                >
                    <li onClick={handleToggleSidebar} className="flex items-center text-2xl rounded py-2 px-3.5 hover:bg-slate-400 hover:cursor-pointer hover:text-black text-slate-200">
                        <span className={`mr-2 text-2xl`}>{isOpenSidebar? <BsListNested/> : <FaList/> }</span>
                        <p className={`font-bold whitespace-nowrap ${isOpenSidebar ? '' : 'hidden'}`}>APP V 1.0.0</p>
                    </li>
                    {navigate.map((item, index) => (
                        <li 
                            key={index} 
                            onClick={()=> handleItemClick(item.route)}
                            className={`flex items-center text-sm rounded py-2 px-3.5 text-slate-200 hover:bg-slate-300 hover:cursor-pointer hover:text-slate-900
                                ${clickedItem ===item.route ? "text-slate-950 bg-slate-400 cursor-pointer " : ""} 
                            `}
                        >
                            <span className="mr-2 text-2xl">{item.icon}</span>
                            <span className={`font-bold whitespace-nowrap ${isOpenSidebar ? '' : 'hidden'} `}>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>

    )
}