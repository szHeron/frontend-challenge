import { IUser } from "@/app/signup/page";
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

    if(user.name.length < 3){
        erros.name = "Erro: Nome inválido."
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)){
        erros.email = "Erro: Email inválido."
    }
    if(user.password.length < 8){
        erros.password = "Erro: Senha pequena."
    }
    if(user.password.match(/\d/) === null){
        erros.password = "Erro: Está faltando um número na senha."
    }
    if(user.password.match(/[a-zA-Z]/) === null){
        erros.password = "Erro: Está faltando uma letra na senha."
    }
    if(user.password !== confirmPassword){
        erros.password = "Erro: As senhas não coincidem."
    }
    if(user.address.length < 3){
        erros.address = "Erro: Endereço inválido."
    }
    if(user.cep.length > 7){
        const cepData = await GetCep(user.cep)
        console.log(user.cep, cepData)
        if(!cepData){
            erros.cep = "Erro: CEP inválido."
        }
    }else{
        erros.cep = "Erro: CEP inválido."
    }
    if(user.city.length < 3){
        erros.city = "Erro: Cidade inválida."
    }
    if(user.state.length < 2){
        erros.state = "Erro: Estado inválido."
    }
    if(user.country.length < 3){
        erros.country = "Erro: país inválido."
    }
    if(user.message.length < 3){
        erros.message = "Erro: mensagem inválida."
    }

    const checker = Object.values(erros).find((value) => value.length > 0)
    if(checker !== undefined && checker.length > 0){
        return erros
    }else{
        return null
    }

}