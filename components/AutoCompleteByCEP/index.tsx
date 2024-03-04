import { GetCep } from "@/utils/getcep";
import { getCepFromLocation } from "@/utils/getcepfromlocation";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface ITextField extends InputHTMLAttributes<HTMLInputElement>{
    helperText?: string;
    labelText: string;
    width?: string;
    onChangeCep: (text:string) => void;
    autoCompleteCep: (state: string, city: string, cep: string) => void;
}

export default function AutoCompleteByCEP({onChangeCep, autoCompleteCep, value, placeholder, helperText, labelText, width}: ITextField){
    const [errorText, setErrorText] = useState("")

    async function validationCep(cep: string){
        const cepData = await GetCep(cep);

        if(!cepData){
            setErrorText("CEP inválido!")
            return;
        }

        autoCompleteCep(cepData.uf, cepData.localidade, cep)
        setErrorText("")
    }

    function handleCepChange(event: ChangeEvent<HTMLInputElement>){
        const cep = event.target.value
        if(/^\d+$/.test(cep) || cep.length === 0){
            onChangeCep(cep)
        }

        if(cep.length === 8 )
            validationCep(cep)   
    }

    async function handleGetCepByLocalization(){
        const cep = await getCepFromLocation()

        if(cep){
            onChangeCep(cep)
            validationCep(cep)
        }else{
            setErrorText('Erro ao buscar CEP')
        }
    }

    return ( 
        <div className={`flex flex-col w-${width?width:"full"}`}>
            <label className="block mb-2 text-sm font-medium text-gray-900">
                {labelText}
            </label>
            <input onChange={handleCepChange} value={value} type="text" placeholder={placeholder} maxLength={8} className={`bg-gray-50 border ${errorText?"border-red-500":"border-gray-300"} text-gray-900 text-sm rounded-lg w-full p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500`} />
            {
               (errorText || helperText) && 
                    <span className="text-red-500 font-light text-sm">
                        {errorText?errorText:helperText}
                    </span>
            }
            <button className="text-blue-500" type="button" onClick={handleGetCepByLocalization}>
                Buscar CEP
            </button>
        </div>
    )
}