import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import Setcookie from "../cookie/Setcookie.jsx";
import { useAuth } from "../context/Authprovider.jsx";

export default function Login() {
    const [authUser,setAuthUser]=useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
      const userInfo = {
          email: data.email,
          password: data.password,
      };
      try {
          const response = await axios.post("https://me-server-sygl.onrender.com/login", userInfo, {
              headers: {
                  'Content-Type': 'application/json',
              }
          });
  
          if (response.status === 200) {
            document.getElementById("my_modal_3").close();
            navigate("/");
            // console.log(response.data);
            var sessionId=response.data.user.sessionId;
            Setcookie("user",sessionId);
            setTimeout(() => {
              window.location.reload();
          }, 2000);
            toast.success("Login successful");
              // Redirect or perform other actions upon successful login
          } else {
           // Handle other responses or conditions as needed
            toast.success("Login failed");
          }
      } catch (error) {
          if (error.response) {
              console.log(error.response.data.message);
              toast.error(error.response.data.message); // Display server-side error message
          } else {
              console.log(error.message);
              toast.error("Unexpected error occurred"); // Handle unexpected errors
              
          }
      }
  };
  function closeDialogue(){
    return  document.getElementById("my_modal_3").close();
  }
  
  return (
    <div>
     <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <a onClick={closeDialogue} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
    
    <h1 className="font-bold text-2xl">Login</h1>
     <div className="mt-4 space-y-2">
        <span>Email</span>
        <br />
        <input {...register("email", { required: true })} type="text" placeholder="Enter Your Email" className="w-80 px-3 py-1 border rounded-md outline-none"  />
          <br />
        {errors.email && <span className="tet-sm text-red-500">This field is required</span>}
     </div>

     <div className="mt-4 space-y-2">
        <span>Password</span>
        <br />
        <input {...register("password", { required: true })} type="password" placeholder="Enter Your Password" className="w-80 px-3 py-1 border rounded-md outline-none" />
        <br /> 
        {errors.password && <span className="tet-sm text-red-500">This field is required</span>}
     </div>

     <div className="flex justify-around mt-4 py-4 ">
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 ">Login</button>
        <p>Not registered? <Link to="/signup" className=" text-blue-500 cursor-pointer hover:underline">Sign Up</Link></p>
     </div>
   </form>
  </div>
</dialog>
    </div>
  );
}
