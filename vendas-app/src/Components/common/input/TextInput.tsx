import { formatReal } from 'app/api/util/money';
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRootProps {
    children: ReactNode;
    columnClasses?: string;
}
function TextInputRoot({children, columnClasses}: TextInputRootProps) {
    return (
        <div className={`flex flex-col mr-5 ${columnClasses}`}>
            {children}
        </div>
    )
}

export interface TextInputLabelProps {
    children: ReactNode;
    columnClasses?: string;
    idFor?: string;
}
function TextInputLabel({children, idFor, columnClasses}: TextInputLabelProps) {
    return (
        <label className={`flex flex-col mr-5 ${columnClasses}`} htmlFor={idFor}>{children}</label>
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
    columnClasses?: string;
    currency?: boolean;
    onChange?: (value: any) => void;
    error?: string;
}
function TextInputInput({columnClasses, currency, onChange, error, ...inputProps}: TextInputInputProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if (value && currency) {
            value = formatReal(value);
          }
      
          if(onChange){
            onChange(value)
          }
    }
  
    return (
        <>
            <input className={`p-2 placeholder-blueGray-300 text-blueGray-600 
            relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline 
            hover:border-2 hover:border-blue-900 focus:border-2 focus:border-blue-900 ${columnClasses}`} 
            {...inputProps} onChange={handleChange} />
            {error && <p className='text-red-500 font-bold'>{error}</p>}
        </>
    )
}

export interface TextInputAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    columnClasses?: string;  
}
function TextInputArea({columnClasses, ...inputProps}: TextInputAreaProps) {
    return (
        <textarea  
        className={`p-2 placeholder-blueGray-300 text-blueGray-600 relative rounded text-base shadow outline-none focus:outline-none focus:shadow-outline 
         hover:border-2 hover:border-blue-900 focus:border-2 focus:border-blue-900 ${columnClasses}`} {...inputProps}/>
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Label: TextInputLabel,
    Area: TextInputArea,
}
