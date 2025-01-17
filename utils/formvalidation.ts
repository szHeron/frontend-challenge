import { IUser } from "@/context/UserContext";
import { GetCep } from "./getcep";

export default async function FormValidation(user: IUser, confirmPassword: string){
    let erros = {
        name: "",
        email: "",
        password: "",
        address: "",
        cep: "",
        state: "",
        city: "",
        country: "",
        message: ""
    }
    const cepData = await GetCep(user.cep)

    if(user.name.length < 3){
        erros.name = "Erro: Nome inválido."
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)){
        erros.email = "Erro: Email inválido."
    }

    if(user.password.includes(" ")){
        erros.password = "Erro: Senha não pode possui espaços."
    }else if(user.password.length < 8 ){
        erros.password = "Erro: Senha pequena."
    }else if(user.password.match(/\d/) === null){
        erros.password = "Erro: Está faltando um número na senha."
    }else if(user.password.match(/[a-zA-Z]/) === null){
        erros.password = "Erro: Está faltando uma letra na senha."
    }

    if(user.password !== confirmPassword){
        erros.password = "Erro: As senhas não coincidem."
    }

    if(user.address.length < 3){
        erros.address = "Erro: Endereço inválido."
    }

    if(user.cep.length < 8){
        erros.cep = "Erro: CEP inválido."
    }

    if(!cepData){
        erros.cep = "Erro: CEP inválido."
    }

    if(cepData?.localidade.toLowerCase() !== user.city.toLowerCase()){
        erros.city = "Erro: Cidade diferente do CEP."
    }

    if(cepData?.uf.toLowerCase() !== user.state.toLowerCase()){
        erros.state = "Erro: Estado diferente do CEP."
    }
    //utilizo somente o Brasil como válido pois o CEP só funciona de forma nacional, não abrangendo outros paises.
    if(user.country.length < 3 || !user.country.toLowerCase().includes("brazil")){
        erros.country = "Erro: país inválido."
    }

    if(user.message.length < 1){
        erros.message = "Erro: mensagem inválida."
    }

    const checker = Object.values(erros).find((value) => value.length > 0)
    
    if(checker !== undefined && checker.length > 0){
        return erros
    }else{
        return null
    }
}