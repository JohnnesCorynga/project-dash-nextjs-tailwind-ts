import { Navbar } from "@/components/layouts/Navbar";
import { SidebarLeft } from "@/components/sidebars/SidebarLeft";
import React from "react"

export default function RootLayout({ 
    children 
} :{
    children: React.ReactNode;
}){
    return(
        <section
            className={`
                flex flex-col h-screen
            `}
        >
            <Navbar/>
            <div className={`flex flex-row h-[90vh] relative`}>
                <SidebarLeft/>
                {children}
            </div>
        </section>
    )
}