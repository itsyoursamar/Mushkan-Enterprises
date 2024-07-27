import { Link, useNavigate } from "react-router-dom";
import Login from "./Login.jsx";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import Setcookie from "../cookie/Setcookie.jsx";

export default function SignUp() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
      const userInfo = {
          username: data.name,
          email: data.email, // Corrected typo here
          password: data.password,
      };
      try {
          const response = await axios.post("https://me-server-sygl.onrender.com/signup", userInfo, {
              headers: {
                  'Content-Type': 'application/json',
              }
          });
          // console.log(response);
          if (response.data) {
            navigate("/");
           
            var sessionId = response.data.user.sessionId;
            Setcookie("user", sessionId);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
            toast.success(response.data.message);
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
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
           
            <h1 className="font-bold text-3xl">SignUp</h1>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-[90%]  px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })} 
             />
             <br />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-[90%]  px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })} 
              />
              <br />
               {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-[90%]  px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })} 
              />
              <br />
               {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="flex justify-around mt-4 py-4 ">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 ">
              Sign up
              </button>
            </div>

            <div className="flex justify-around py-4 ">
            <p>already registered? <span className="text-blue-500  hover:underline"><Link to="/">Login</Link></span> </p>  
            </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
