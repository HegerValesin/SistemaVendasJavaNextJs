import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
children: ReactNode;
columnClasses?: string;
}

function ButtonSalvar({children, columnClasses, ...buttonProps}: ButtonProps) {
    return (
        <button
            className={`inline-block self-end rounded-full bg-green-500 px-3 py-3 font-alt text-sm uppercase 
            leading-none text-black hover:bg-green-600 w-32 m-5 ${columnClasses}`}
            { ...buttonProps } >
                {children}
        </button>
    )
}
    
function ButtonCancelar({children, columnClasses, ...buttonProps}: ButtonProps) {
        return (
            <button
                className={`inline-block self-end rounded-full bg-red-500 px-3 py-3 font-alt text-sm uppercase 
                leading-none text-black hover:bg-red-600 w-32 m-5 ${columnClasses}`}
                { ...buttonProps } >
                    {children}
            </button>
        )
    }

function ButtonNovo({children, columnClasses, ...buttonProps}: ButtonProps) {
        return (
            <button
                className={`inline-block self-end rounded-full bg-blue-500 px-3 py-3 font-alt text-sm uppercase 
                leading-none text-black hover:bg-blue-600 w-32 m-5 ${columnClasses}`}
                { ...buttonProps } >
                    {children}
            </button>
        )
    }

    function ButtonEditar({children, columnClasses, ...buttonProps}: ButtonProps) {
        return (
            <button
                className={`inline-block self-end rounded-full bg-yellow-500 px-2 py-2 font-alt text-sm uppercase 
                leading-none text-black hover:bg-yellow-600 m-1 ${columnClasses}`}
                { ...buttonProps } >
                    {children}
            </button>
        )
    }

export const Button = {
    Salvar: ButtonSalvar,
    Cancelar: ButtonCancelar,
    Novo: ButtonNovo,
    Editar: ButtonEditar
}