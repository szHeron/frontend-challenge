import { Dispatch, FormEvent, SetStateAction } from "react";
import { IUser } from "@/context/UserContext";
import AutoCompleteByCEP from "../AutoCompleteByCEP";
import SelectCountries from "../SelectCountries";
import TextField from "../TextField";
import VerifyStrongPassword from "../VerifyStrongPassword";

interface IForm {
    handleValidation: (event: FormEvent)=>void;
    setUser: Dispatch<SetStateAction<IUser>>
    user: IUser;
    setConfirmPassword: Dispatch<SetStateAction<string>>;
    confirmPassword: string;
    erros: IUser;
}

export default function Form({handleValidation, setUser, user, setConfirmPassword, confirmPassword, erros}: IForm){
    return (
        <form onSubmit={handleValidation} className="flex flex-col gap-2 w-3/4">
            <TextField 
                onChange={text => setUser({...user, name: text.target.value})} 
                value={user.name} 
                labelText="Nome" 
                placeholder="John doe" 
                helperText={erros.name}
                maxLength={150}
            />
            <TextField 
                onChange={text => setUser({...user, email: text.target.value})} 
                value={user.email} 
                labelText="Email" 
                placeholder="Johndoe@email.com" 
                helperText={erros.email} 
                maxLength={100}
            />
            <TextField 
                onChange={text => setUser({...user, password: text.target.value})} 
                value={user.password} type="password" 
                labelText="Senha" 
                placeholder="*********" 
                helperText={erros.password} 
                maxLength={35}
            />
            <VerifyStrongPassword password={user.password}/>
            <TextField 
                onChange={text => setConfirmPassword(text.target.value)} 
                value={confirmPassword} 
                type="password" 
                labelText="Confirmar senha" 
                placeholder="*********" 
                helperText={erros.password} 
                maxLength={35}
            />
            <div className="flex flex-row gap-2">
                <TextField 
                    onChange={text => setUser({...user, address: text.target.value})} 
                    value={user.address} 
                    labelText="Endereço" 
                    placeholder="Sua rua" 
                    helperText={erros.address}
                />
                <AutoCompleteByCEP 
                    onChangeCep={text => setUser({...user, cep: text})} 
                    autoCompleteLocation={(state, city) => setUser({...user, state, city})} 
                    value={user.cep} 
                    labelText="CEP" 
                    placeholder="00000-000" 
                    width="1/4" 
                    helperText={erros.cep}
                />
            </div>
            <div className="flex flex-row gap-2">
                <TextField 
                    onChange={text => setUser({...user, city: text.target.value})} 
                    value={user.city} 
                    labelText="Cidade" 
                    placeholder="Sua cidade" 
                    helperText={erros.city}
                />
                <TextField 
                    onChange={text => setUser({...user, state: text.target.value})} 
                    value={user.state} 
                    labelText="Estado" 
                    placeholder="UF" 
                    helperText={erros.state}
                    maxLength={2}
                />
                <SelectCountries onChange={(value)=> setUser({...user, country: value.target.value})} helpertext={erros.country}/>
            </div>
                <TextField 
                    onChange={text => setUser({...user, message: text.target.value})} 
                    value={user.message} 
                    labelText="Mensagem" 
                    placeholder="Escreva sua mensagem" 
                    helperText={erros.message}
                />
            <button type="submit" className="text-white font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300">
                Salvar
            </button>
        </form>
    )
}