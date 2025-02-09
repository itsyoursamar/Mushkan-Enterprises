import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import { useAuth } from "../context/Authprovider.jsx";

export default function Navbar() {
  const [authUser, setAuthUser] = useAuth();

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navitems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/process">Process</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50  ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200  dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
            : ""
        } `}
        
      >
       <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navitems}
              </ul>
            </div>
            <a className="btn btn-ghost text-l  md:text-3xl ">
              Mushkan Enterprises
            </a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navitems}</ul>
            </div>

            {authUser.authUser ? (
              <Logout />
            ) : (
              <div className="">
                <a
                  htmlFor="my_modal_3"
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
