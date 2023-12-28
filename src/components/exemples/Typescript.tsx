type PearsonProps = {
    name: string
    age: string
    doc: number
}
type ContactProps = {
    email: string
    phone: string
}
type AddressProps = {
    city: string
    zipCode: number | string
}
type CustomerProps = PearsonProps | ContactProps | AddressProps

type Day = 'Domingo' | 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sabado'

type EverydayCode = Record<Day, 'code'>
function exempleFuctionGeneric<T>(args: T) {
    console.log(args)
}
exempleFuctionGeneric({ name: "Eros" })

type DocumentProps = Pick<PearsonProps, 'doc'>
type PearsonWithoutDocProps = Omit<PearsonProps, 'doc'>
type ButtonProps = Record<'name' | 'color' | 'type', string>

interface TypescriptProps {

}
export function Typescript(props: CustomerProps) {
    return (
        <></>
    )
}