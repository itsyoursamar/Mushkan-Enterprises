import { createContext, useContext, useState } from "react"
import Getcookie from "../cookie/Getcookie";

export const AuthContext=createContext();

export default function Authprovider({children}){
    const initialAuthUser=Getcookie("user");
       
    const[authUser,setAuthUser]=useState(
        initialAuthUser? initialAuthUser: undefined
    );
       return(
        <AuthContext.Provider value={[{authUser,setAuthUser}]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext);