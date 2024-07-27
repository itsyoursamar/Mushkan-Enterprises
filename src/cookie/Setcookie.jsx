import Cookie from "js-cookie";

export default function Setcookie(cookiename,userInfo){
    return(    
    Cookie.set(cookiename,userInfo,{
            expires: 7, //7 day
            secure: true,
            sameSite: 'strict',
            path: "/"
        })
    )
}
