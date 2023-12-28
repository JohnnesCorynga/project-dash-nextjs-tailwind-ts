interface ModalTitleProps {
    children: React.ReactNode
}
export function ModalTitle({ children } : ModalTitleProps){
    return(
        <p className="text-lg font-bold">
            {children}
        </p>
    )
}