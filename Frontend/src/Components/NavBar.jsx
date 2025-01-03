import React, { useEffect, useState } from "react";
// import { auth } from "../services/firebase";
import { useNavigate, NavLink } from "react-router-dom";

import toast from "react-hot-toast";
import { useAuthStore } from "../../store/authStore";

import { IoIosLogOut } from "react-icons/io";

const navLinkCss =
  "hover-cursorCSS lg:hover:scale-110 transition-all lg:hover:font-bold";

const Navbar = () => {
  const { logout } = useAuthStore();
  // const isAuthenticated = useAuthStore();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // useEffect(() => {
  //   console.log("User → ",user);
  // },[user])

  const navigate = useNavigate();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       // console.log("user is - ",user);
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe(); // Cleanup subscription on unmount
  // }, []);

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
      toast.error("Error logging out. Please try again.");
    }
  }

  return (
    // <nav className="flex items-center justify-between py-4 px-4 sm:px-8 w-full">
    //   <NavLink to="/" className="hover-cursorCSS text-xl font-black font">
    //     QuizifyAI
    //   </NavLink>
    //   <div className="flex items-center space-x-4">
    //     {isAuthenticated ? (
    //       <div className="flex gap-x-4">
    //         <NavLink to="/" className={navLinkCss}>
    //           Home
    //         </NavLink>
    //         <NavLink to="/profile" className={navLinkCss}>
    //           Profile
    //         </NavLink>
    //         <NavLink to="/allquiz" className={navLinkCss}>
    //           Quizz
    //         </NavLink>
    //         <button onClick={handleLogout} className={`${navLinkCss} flexCenter gap-x-1`}>
    //           <span>
    //             <IoIosLogOut className="text-xl" />
    //             {/* Logout */}
    //           </span>
    //         </button>
    //       </div>
    //     ) : (
    //       <div className="flex gap-x-4">
    //         <NavLink to="/login" className={navLinkCss}>
    //           Login
    //         </NavLink>
    //         <NavLink to="/signup" className={navLinkCss}>
    //           Signup
    //         </NavLink>
    //       </div>
    //     )}
    //   </div>

    // </nav>

    <nav className="flex items-center justify-between py-4 px-4 sm:px-8 w-full">
      <NavLink to="/" className="hover-cursorCSS text-xl font-black font">
        QuizifyAI
      </NavLink>
      <div className="flex items-center space-x-1 sm:space-x-4 text-sm">
        {isAuthenticated ? (
          <div className="flex gap-x-2 sm:gap-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkCss} ${isActive ? "font-bold" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${navLinkCss} ${isActive ? "font-bold" : ""}`
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/allquiz"
              className={({ isActive }) =>
                `${navLinkCss} ${isActive ? "font-bold" : ""}`
              }
            >
              Quizz
            </NavLink>
            <button
              onClick={handleLogout}
              className={`${navLinkCss} flexCenter gap-x-1`}
            >
              <span>
                <IoIosLogOut className="text-xl" />
              </span>
            </button>
          </div>
        ) : (
          <div className="flex gap-x-2 sm:gap-x-4">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${navLinkCss} ${isActive ? "font-bold" : ""}`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `${navLinkCss} ${isActive ? "font-bold" : ""}`
              }
            >
              Signup
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
