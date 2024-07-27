import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Error404Image from '../../public/Error404.jpg';

export default function WrongRoute({ path }) {
  const [msg, setMsg] = useState([]);
  const [requested, setRequested] = useState(false);

  useEffect(() => {
    async function handleRoute() {
      try {
        const response = await axios.get(`http://localhost:8000${path}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 404) {
          console.log(response.data);
          setMsg((prevMsg) => [...prevMsg, ""]);
          setMsg((prevMsg) => [...prevMsg, "Path Doesn't exist!"]);
          setRequested(true);
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
          setMsg((prevMsg) => [...prevMsg, ]);
          setMsg((prevMsg) => [...prevMsg, "Path Doesn't exist!"]);
          setRequested(true);
         
        } else {
          console.log(error.message);
          toast.error("Unexpected error occurred"); // Handle unexpected errors
        }
      } 
    }

    handleRoute();
  }, [path]);

  return (
    <>
      {requested && msg.length > 0 && (
      
        <div role="alert" className="alert alert-error md:py-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{msg.join(', ')}</span>
        </div>
      )}
      <img src={Error404Image} alt="404 Error" className="mt-5 w-full md:w-1/2 mx-auto md:mt-0" />

      
    </>
  );
}
