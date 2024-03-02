import Image from "next/image"
import logo from "../../public/logo.jpg"

export default function UserInformationCard(){
    return (
        <div className="flex flex-col bg-blue-500 w-1/5 h-full rounded-lg items-center py-8 px-4">
            <div className="flex flex-col items-center">
                <Image className="rounded-full" src={logo} width={120} height={120} alt="Foto de perfil" />
                <p className="text-white font-medium my-2">Heron Rodrigues de Oliveira</p>
            </div>
            <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row gap-4 mt-8">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                    <p className="text-white font-medium">contatoheron.dev@gmail.com</p>
                </div>
                <div className="flex flex-row gap-4">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
                    <p className="text-white font-medium">Rua Doutor José Ramalho - </p>
                </div>
                <div className="flex flex-row gap-4">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"/></svg>
                    <p className="text-white font-medium">Russas, CE - Brasil</p>
                </div>
                <div className="flex flex-row gap-4">
                    <svg fill="#fff" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 23h-24v-13.275l2-1.455v-7.27h20v7.272l2 1.453v13.275zm-20-10.472v-9.528h16v9.527l-8 5.473-8-5.472zm14-.528h-12v-1h12v1zm0-3v1h-12v-1h12zm-7-1h-5v-3h5v3zm7 0h-6v-1h6v1zm0-2h-6v-1h6v1z"/></svg>
                    <p className="text-white font-medium">Messagem</p>
                </div>
            </div>
        </div>
    )
}