import Image from "next/image"
import logo from "../../assets/logo.jpg"
import { IUser } from "@/context/UserContext"

export default function UserInformationCard({user}:{user:IUser}){
    return (
        <div className="flex flex-col shadow-2xl bg-gradient-to-t from-[#73A8FF] to-[#1A58BE] w-1/5 h-full p-4">
            <div className="flex flex-col items-center mt-4">
                <Image className="rounded-full" src={logo} width={120} height={120} alt="Foto de perfil" />
                <p className="text-white font-medium my-2">{user.name}</p>
            </div>
            <div className="flex flex-col items-start gap-4 text-white font-light mt-8">
                <p className="font-normal self-center">Resumo</p>
                <div className="flex flex-row gap-4 items-center">
                    <svg fill="#fff" height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg>
                    <p>{user.email}</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <svg fill="#fff" height="22" width="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>
                    <p>{user.address} - {user.cep}</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <svg fill="#fff" height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771"/></svg>
                    <p>{user.city}, {user.state} - {user.country}</p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-row gap-4 items-center">
                        <svg fill="#fff" height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007m0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007"/></svg>
                        <p>Messagem</p>
                    </div>
                    <div className="border-white border-2 p-1 rounded-lg w-full">
                        <p className="text-center">
                            {user.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}