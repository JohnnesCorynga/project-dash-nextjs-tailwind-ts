// Crie um arquivo chamado, por exemplo, 'ManagerContext.js' no mesmo diretório do seu RootLayout
'use client'
import { pathName } from '@/components/constants/pathName';
import React, { createContext, useState } from 'react';

interface AuthContextProps {
    algumaInformacao: string;
    setAlgumaInformacao: React.Dispatch<React.SetStateAction<string>>;
}
interface AuthProps {
    children: React.ReactNode
}
export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: AuthProps) => {
    const path = pathName()
    console.log(path)
    const [algumaInformacao, setAlgumaInformacao] = useState<string>("");
    return (
        <AuthContext.Provider value={{ 
            algumaInformacao, setAlgumaInformacao 
        }}>
            {children}
        </AuthContext.Provider>
    );
};