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
    loading: boolean;
}

export default function Form({handleValidation, setUser, user, setConfirmPassword, confirmPassword, erros, loading}: IForm){
    function autoCompleteCep(state: string, city: string, cep: string){
        setUser({...user, state, city, cep})
    }

    return (
        <form onSubmit={handleValidation} className="flex flex-col gap-2 w-[90%] xl:w-2/4">
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
                    maxLength={100}
                />
                <AutoCompleteByCEP 
                    onChangeCep={text => setUser({...user, cep: text})} 
                    autoCompleteCep={autoCompleteCep} 
                    value={user.cep} 
                    labelText="CEP" 
                    placeholder="00000000" 
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
                    maxLength={50}
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
                maxLength={300}
            />
            <button disabled={loading} type="submit" className="flex justify-center text-white font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300">
                {
                    loading?
                        <svg className="animate-spin" fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 23c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm4.084-.834c0-.483-.393-.875-.875-.875s-.875.392-.875.875.393.875.875.875.875-.392.875-.875zm3.443-2.387c0-.414-.336-.75-.75-.75s-.75.336-.75.75.336.75.75.75.75-.336.75-.75zm2.343-3.568c0-.391-.317-.708-.708-.708s-.708.317-.708.708.317.708.708.708.708-.317.708-.708zm.796-4.209c0-.368-.298-.667-.666-.667s-.666.298-.666.667.298.667.666.667.666-.298.666-.667zm-.879-4.209c0-.345-.28-.625-.625-.625s-.625.28-.625.625.28.625.625.625.625-.279.625-.625zm-2.427-3.568c0-.322-.262-.583-.583-.583s-.583.261-.583.583.262.583.583.583.583-.261.583-.583zm-3.609-2.385c0-.299-.242-.542-.541-.542s-.541.242-.541.542.242.542.541.542.541-.243.541-.542zm-3.751-.84c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-4.21.838c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-3.569 2.385c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-2.384 3.57c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm-.837 4.209c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm.837 4.209c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm2.384 3.569c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm3.571 2.383c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"/></svg>
                    :
                    <p>Salvar</p>
                } 
            </button>
        </form>
    )
}