interface HeaderProps {
    children: React.ReactNode
}
export function Header({ children } : HeaderProps){
    return(
        <header className="bg-slate-200 ">
            <div className="flex items-center justify-between p-3">
                {children}
            </div>
        </header>
    )
}