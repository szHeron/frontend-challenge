import api_cep from "@/services/api_cep";

interface ICEP {
    localidade: string;
    uf: string;
    erro?: string;
}

export async function GetCep(cep: string){
    try {
        if(cep.length < 8)
            return null
        
        const response = await api_cep.get(`/${cep}/json/`)
        const cepData: ICEP = response.data
        if(cepData.erro === "true")
            return null
        return cepData
    }catch(e){ 
        return null
    }

}