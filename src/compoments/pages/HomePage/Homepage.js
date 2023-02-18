import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import Logo from "../../../assets/logo.svg";
import Content from "../homepageLayout/content/Content";

const Homepage = () => {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handlelogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="App">
      <nav className="max-w-[1650px] mx-auto sm:my-1 xl:my-10 p-4 flex flex-row justify-between items-center">
        <img src={Logo} alt="logo" className="xl:w-25 xl:h-8 sm:w-15 sm:h-5" />

        <div className="flex flex-row space-x-12 items-center ">
          <p className="hide_email">
            User Email: <span>{user && user.email}</span>
          </p>
          <button
            className="border border-indigo-600 bg-indigo-500 text-center rounded w-30 xl:p-4 sm:p-7 my-3 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-60 hover:bg-indigo-600 duration-300"
            onClick={handlelogout}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* section  */}
      <Content />
    </div>
  );
};

export default Homepage;
