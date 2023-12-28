import { RefObject } from "react"

interface InputPassProps {
    name: string
    label: string
    type: string
    className?: string
    disabled?: boolean
    autofocus?: boolean
    readOnly?: boolean
    handleOnChange?: () => void
    value?: string
    maxLength?: number
    minLength?: number
    ref?: RefObject<HTMLInputElement>
    placeholder?: string
    inputTypeBottom?: boolean
}
export function InputPass(props : InputPassProps){
    const {
        name, label, type, className, 
        disabled, autofocus, handleOnChange, readOnly, 
        value, maxLength, minLength, ref,
        placeholder, inputTypeBottom
    } = props
    const inputClassType = `
        w-full bg-white border-b-2 border-gray-300
        focus:border-sky-600
        text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
        duration-200 ease-in-out 
        ${className} 
    ` 
    return(
        <>
            <div className="relative mb-4">
                <label htmlFor={name} className="leading-7 text-sm text-gray-600">{label}</label>
                <input 
                    type="password" 
                    id={name} 
                    name={name}
                    autoFocus={autofocus}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                    value={value}
                    ref={ref}
                    maxLength={maxLength}
                    minLength={minLength}
                    className={ 
                        !inputTypeBottom? 
                        `
                            w-full bg-white rounded border border-gray-300 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
                            duration-200 ease-in-out
                            ${className} 
                        `
                        :   
                            inputClassType
                    }
                    />
            </div>
        </>
    )
}