import Cookie from "js-cookie";

export default function Getcookie(cookiename){
    return(    
        Cookie.get(cookiename)
        )
}
