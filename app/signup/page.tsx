"use client"

import { FormEvent, useState } from "react";
import Image from "next/image";
import illustration from "@/assets/illustration_weather.svg"
import TextField from "@/components/TextField";
import FormValidation from "@/utils/formvalidation";
import VerifyStrongPassword from "@/components/VerifyStrongPassword";
import SelectCountries from "@/components/SelectCountries";
import AutoCompleteByCEP from "@/components/AutoCompleteByCEP";

export interface IUser {
  name: string;
  email: string;
  password: string;
  address: string;
  cep: string;
  state: string;
  city: string;
  country: string;
  message: string;
}

const initialState: IUser = {
  name: "",
  email: "",
  password: "",
  address: "",
  cep: "",
  state: "",
  city: "",
  country: "",
  message: ""
};

export default function Signup() {
  const [user, setUser] = useState<IUser>(initialState)
  const [confirmPassword, setConfirmPassword] = useState("")

  function handleValidation(e: FormEvent){
    e.preventDefault()
    FormValidation(user, confirmPassword)
  }

  return (
    <div className="flex flex-row h-screen w-screen">
      <aside className="flex flex-1 justify-center items-center bg-blue-500">
        <Image src={illustration} width={500} height={500} alt="Ilustração da tela de cadastro" />
      </aside>
      <main className="flex flex-1 flex-col justify-center items-center">
        <div className="flex flex-col items-center mb-4">
          <h1 className="font-bold text-lg">
            Olá, bem-vindo!
          </h1>
          <span>
            Realize abaixo o cadastro da sua conta!
          </span>
        </div>
        <form onSubmit={handleValidation} className="flex flex-col gap-2 w-3/4">
          <TextField onChange={text => setUser({...user, name: text.target.value})} value={user.name} labelText="Nome" placeholder="John doe" maxLength={150}/>
          <TextField onChange={text => setUser({...user, email: text.target.value})} value={user.email} labelText="Email" placeholder="Johndoe@email.com" maxLength={100}/>
          <TextField onChange={text => setUser({...user, password: text.target.value})} value={user.password} type="password" labelText="Senha" placeholder="*********" maxLength={35}/>
          <VerifyStrongPassword password={user.password}/>
          <TextField onChange={text => setConfirmPassword(text.target.value)} value={confirmPassword} type="password" labelText="Confirmar senha" placeholder="*********"/>
          <div className="flex flex-row gap-2">
            <TextField onChange={text => setUser({...user, address: text.target.value})} value={user.address} labelText="Endereço" placeholder="Sua rua"/>
            <AutoCompleteByCEP onChangeCep={text => setUser({...user, cep: text})} autoCompleteLocation={(state, city) => setUser({...user, state, city})} value={user.cep} labelText="CEP" placeholder="00000-000" width="1/4"/>
          </div>
          <div className="flex flex-row gap-2">
            <TextField onChange={text => setUser({...user, city: text.target.value})} value={user.city} labelText="Cidade" placeholder="Sua cidade"/>
            <TextField onChange={text => setUser({...user, state: text.target.value})} value={user.state} labelText="Estado" placeholder="UF"/>
            <SelectCountries onChange={(value)=> setUser({...user, country: value.target.value})}/>
          </div>
          <TextField onChange={text => setUser({...user, message: text.target.value})} value={user.message} labelText="Mensagem" placeholder="Escreva sua mensagem"/>
          <button type="submit" className="text-white font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300">
            Salvar
          </button>
        </form>
      </main>
    </div>
  );
}
  