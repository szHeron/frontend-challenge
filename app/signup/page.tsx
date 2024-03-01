import Image from "next/image";
import illustration from "../../assets/illustration_weather.svg"
import TextField from "@/components/TextField";

export default function Signup() {
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
          <form className="flex flex-col gap-2 w-1/2">
            <TextField labelText="Nome" placeholder="Seu nome"/>
            <TextField labelText="Email" placeholder="Seu email"/>
            <TextField labelText="Senha" placeholder="Sua senha"/>
            <TextField labelText="Confirmar senha" placeholder="Repetida sua senha"/>
            <div className="flex flex-row gap-2">
              <TextField labelText="Endereço" placeholder="Seu endereço"/>
              <TextField labelText="CEP" placeholder="Seu CEP" width="1/4"/>
            </div>
            <div className="flex flex-row gap-2">
              <TextField labelText="Cidade" placeholder="Sua cidade"/>
              <TextField labelText="Estado" placeholder="Seu estado"/>
              <TextField labelText="Pais" placeholder="Seu pais"/>
            </div>
            <TextField labelText="Mensagem" placeholder="Escreva sua mensagem"/>
          </form>
        </main>
      </div>
    );
  }
  