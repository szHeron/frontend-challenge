"use client"

import api_countries from "@/services/api_countries"
import { useEffect, useState } from "react"

interface ICountryData {
    name: {
        common: string;
    }
}

export default function Select(){
    const [contries, setContries] = useState([""])

    async function getAllContries(){
        try {
            const response = await api_countries.get("/all?fields=name")
            const countries = response.data.map((item: ICountryData) => item.name.common)
            setContries(countries.sort())
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getAllContries()
    },[])

    return(
        <div className="flex flex-col w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900">País</label>
            <select className="bg-gray-50 border block w-full p-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <option selected>Escolha o pais</option>
                {
                    contries.map((item, index)=>{
                        return <option key={index} value={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}