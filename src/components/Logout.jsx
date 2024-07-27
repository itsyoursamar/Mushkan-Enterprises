import toast from "react-hot-toast";
import { useAuth } from "../context/Authprovider.jsx";
import Removecookie from "../cookie/Removecookie.jsx";

export default  function Logout(){
    const[authUser,setAuthUser]=useAuth();
    console.log("AuthUser and SetAuthUser in Logout:", authUser, setAuthUser);
    const handleLogout = () => {
        try {
  
            Removecookie('user');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            toast.success("Logout Successfully");
        } catch (err) {
            toast.error(err.message);
        }
    };
    return(
        <>
        <button className="bg-red-400 text-white px-3 py-2 rounded-md hover:bg-red-300 duration-200 cursor-pointer"
        onClick={handleLogout}
        >Logout</button>
        </>
    )
}