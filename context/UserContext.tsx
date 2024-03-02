"use client";
import { createContext, ReactNode, useState } from "react";

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

interface UserContextType {
    handleAddUser: (user: IUser) => void;
    user: IUser;
}

interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

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

export default function UserContextProvider(props: UserContextProviderProps) {
    const [user, setUser] = useState<IUser>(initialState);

    function handleAddUser(newUser:IUser){
        setUser(newUser)
    }

    return (
        <UserContext.Provider
           value={{
                handleAddUser,
                user,
           }}
        >
            {props.children}
        </UserContext.Provider>
     );
  }