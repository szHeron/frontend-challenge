import { InputHTMLAttributes } from "react";

interface ITextField extends InputHTMLAttributes<HTMLInputElement>{
    helperText?: string;
    labelText: string;
    width?: string;
}

export default function TextField({onChange, type="text", placeholder, value, helperText, labelText, width, maxLength}: ITextField){
    return ( 
        <div className={`flex flex-col w-${width?width:"full"}`}>
            <label className="block mb-2 text-sm font-medium text-gray-900">
                {labelText}
            </label>
            <input onChange={onChange} type={type} value={value} maxLength={maxLength} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
            {helperText && <span>{helperText}</span>}
        </div>
    )
}