import Progressbar from "../ProgressBar";

export default function VerifyStrongPassword({password}: {password:string}){
    let strengthPassword = {atLeastEight: false, oneNumber: false, oneChar: false}

    if(password.length > 8){
        strengthPassword.atLeastEight = true
    }
    if(password.match(/\d/) !== null){
        strengthPassword.oneNumber = true
    }
    if(password.match(/[a-zA-Z]/) !== null){
        strengthPassword.oneChar = true
    }

    return (
        <div className="flex flex-col">
            <Progressbar value={Object.values(strengthPassword).filter(value => value).length} total={3}/>
            <div className="flex flex-row items-center gap-2">
                <svg fill={strengthPassword.atLeastEight?"#90ee90":"#FF7F7F"} height={16} width={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/></svg>
                <p>Possui mais que 8 caracteres</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <svg fill={strengthPassword.oneNumber?"#90ee90":"#FF7F7F"} height={16} width={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/></svg>
                <p>Possui pelo menos um número</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <svg fill={strengthPassword.oneChar?"#90ee90":"#FF7F7F"} height={16} width={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/></svg>
                <p>Possui pelo menos uma letra</p>
            </div>
        </div>
    )
}