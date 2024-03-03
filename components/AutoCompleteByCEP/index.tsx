import { GetCep } from "@/utils/getcep";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface ITextField extends InputHTMLAttributes<HTMLInputElement>{
    helperText?: string;
    labelText: string;
    width?: string;
    onChangeCep: (text:string) => void;
    autoCompleteLocation: (state: string, city: string) => void;
}

export default function AutoCompleteByCEP({onChangeCep, autoCompleteLocation, value, placeholder, helperText, labelText, width}: ITextField){
    const [errorText, setErrorText] = useState("")

    function handleCepChange(event: ChangeEvent<HTMLInputElement>){
        const notFormattedCep = event.target.value
        const formattedCep = notFormattedCep.replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')

        onChangeCep(formattedCep)
    }

    async function ValidationCEP(){
        if(typeof value !== "string")
            return

        const cepData = await GetCep(value);

        if(!cepData){
            setErrorText("CEP inválido!")
            return;
        }

        autoCompleteLocation(cepData.uf, cepData.localidade)
        setErrorText("")
    }

    return ( 
        <div className={`flex flex-col w-${width?width:"full"}`}>
            <label className="block mb-2 text-sm font-medium text-gray-900">
                {labelText}
            </label>
            <input onChange={handleCepChange} value={value} type="text" placeholder={placeholder} maxLength={9} className={`bg-gray-50 border ${errorText?"border-red-500":"border-gray-300"} text-gray-900 text-sm rounded-lg w-full p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500`} />
            {
               (errorText || helperText) && 
                    <span className="text-red-500 font-light text-sm">
                        {errorText?errorText:helperText}
                    </span>
            }
            <button type="button" onClick={ValidationCEP}>
                <p className="text-blue-600 font-light underline">Completar endereço</p>
            </button>
        </div>
    )
}