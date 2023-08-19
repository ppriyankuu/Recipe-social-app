/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const logOut = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="w-full bg-slate-800 mx-auto h-[80px] flex items-center justify-center gap-24">
      <button className="py-2 px-5 bg-slate-300 font-semibold rounded-lg">
        <Link to="/">Home</Link>
      </button>
      <button className="py-2 px-5 bg-slate-300 font-semibold rounded-lg">
        <Link to="recipe">Create Recipe</Link>
      </button>
      <button className="py-2 px-5 bg-slate-300 font-semibold rounded-lg">
        <Link to="/saved">Saved Items</Link>
      </button>
      {!cookies.access_token ? (
        <button className="py-2 px-5 bg-orange-400 font-semibold rounded-lg">
          <Link to="/login">Login / Sign Up</Link>
        </button>
      ) : (
        <button
          onClick={logOut}
          className="py-2 px-5 bg-yellow-400 font-semibold rounded-lg"
        >
          Log Out
        </button>
      )}
    </div>
  );
};

export default Header;
