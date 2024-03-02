"use client"

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import illustration from "@/assets/illustration_weather.svg"
import FormValidation from "@/utils/formvalidation";
import Form from "@/components/Form";

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
  const [erros, setErros] = useState(initialState)
  const router = useRouter()

  async function handleValidation(event: FormEvent){
    event.preventDefault()
    const result = await FormValidation(user, confirmPassword)

    if(!result){
      router.push('/')
    }else{
      setErros(result)
    }
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
            Preencha o formulário abaixo!
          </span>
        </div>
        <Form handleValidation={handleValidation} setUser={setUser} user={user} setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword} erros={erros}/>
      </main>
    </div>
  );
}
  