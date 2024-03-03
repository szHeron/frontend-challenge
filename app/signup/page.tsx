"use client"

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"
import useUser from "@/hooks/useUser";
import FormValidation from "@/utils/formvalidation";
import Form from "@/components/Form";
import { IUser } from "@/context/UserContext";

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
  const [loading, setLoading] = useState(false)
  const { handleAddUser } = useUser();
  const router = useRouter()

  async function handleValidation(event: FormEvent){
    event.preventDefault()
    setLoading(true)
    const result = await FormValidation(user, confirmPassword)

    if(!result){
      handleAddUser(user)
      router.push('/success')
    }else{
      setErros(result)
    }
    setLoading(false)
  }

  return (
    <main className="flex w-full flex-col justify-center items-center pt-8">
      <div className="flex flex-col items-center mb-6">
        <h1 className="font-bold text-lg">
          Olá, bem-vindo!
        </h1>
        <span>
          Preencha o formulário abaixo!
        </span>
      </div>
      <Form handleValidation={handleValidation} setUser={setUser} user={user} setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword} erros={erros} loading={loading}/>
    </main>
  );
}
  