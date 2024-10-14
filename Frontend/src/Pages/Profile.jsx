import React, { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import VerifyCode from "../Components/VerifyCode";
import { useNavigate } from "react-router-dom";
import DeleteAccountPopup from "../Components/DeleteAccountPopup";

import { IoCheckmarkDone } from "react-icons/io5";

import profile from "../profile.webp";
// import profile from "../pr";

const Profile = () => {
  const navigete = useNavigate();

  const {
    user,
    popup,
    verifyEmail,
    isUserVerified,
    deleteAcount,
    deleteAccPopup,
  } = useAuthStore();

  const formatDate = (date) => {
    const options = {
      day: "numeric",
      month: "long",
      // month: 'numeric',
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Use 12-hour format
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // const deleteHandler = () => {
  //   deleteAcount();
  //   navigete('/');
  // }

  const deleteHandlerPopup = () => {
    useAuthStore.setState({ deleteAccPopup: true });
  };

  // useEffect(() => {
  //   console.log("User → ",user);
  //   console.log("isAuthenticated → ",isAuthenticated);
  // },[user])

  return (
    <section className=" flexCenter min-h-[77vh] px-5 bg-slate-100">

      <main className="border-2 border-slate-200 rounded-xl min-w-96 px-4 bg-[#ffffffb3]">

        <div className="flexBetween border-b-2 border-slate-200 p-4">
          <h2 className="text-xl font-bold font">Profile</h2>
          <img src={profile} alt="img" className=" max-h-20" />
        </div>

        <div className="p-4 flex flex-col gap-y-3 ">
          {user && (
            <>
              <h2><span className="text-xs">Full Name - </span> <b className=" capitalize"> {user.name}</b></h2>
              <h2><span className="text-xs">Email - </span> {user.email}</h2>
              {/* <h2>Verified : {user.isVerified ? "Yes" : "No" }</h2> */}
              <h2 className="flex items-center gap-x-2">
              <span className="text-xs ">Verified - </span>
                 {isUserVerified ? "Yes" : "No"}{" "}
                <span className=" text-blue-500 text-x">
                  {" "}
                  {isUserVerified && <IoCheckmarkDone />}
                </span>{" "}
              </h2>
            </>
          )}

          {!isUserVerified && (
            // !user.isVerified &&
            <button
              className="hover-cursorCSS  text-blue-500 text-left mt-1 text-xs w-fit"
              onClick={() => verifyEmail(user?.email)}
            >
              Verify now →
            </button>
          )}

          <h2 className=" text-xs mt-1">
            Last Login :
            {user.lastLogin ? (
              <span> {formatDate(user.lastLogin)}</span>
            ) : (
              "You just signed up!"
            )}
          </h2>

          <div className="flex justify-end w-full text-xs mt-2">
            <button
              onClick={deleteHandlerPopup}
              className="hover-cursorCSS p-2 hover:scale-110 text-red-500 transition-all mb-3 "
            >
              Delete Account
            </button>
          </div>

          {popup && <VerifyCode />}

          {deleteAccPopup && <DeleteAccountPopup />}
        </div>
        
      </main>
    </section>
  );
};

export default Profile;
