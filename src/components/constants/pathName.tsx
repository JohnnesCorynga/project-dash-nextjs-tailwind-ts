'use client'

import { usePathname } from "next/navigation"

export const pathName =()=>{
    const pathname = usePathname()
    return pathname
}