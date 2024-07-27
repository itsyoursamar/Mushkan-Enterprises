import Cookie from "js-cookie";

export default function Removecookie(cookiename){
    return(    
        Cookie.remove(cookiename)
        )
}
