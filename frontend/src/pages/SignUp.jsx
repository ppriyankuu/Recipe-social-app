/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8000/auth/signup", {
        username,
        password,
      }); //the first link is the api endpoint, and the second is the req.body
      alert("Successfully Registered");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(`error: ${error.message}`);
      alert("User already exists. Login instead!");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="w-[400px] mx-auto mt-24 p-5 shadow-lg shadow-black rounded-xl">
      <div className="flex justify-center gap-28 items-center font-semibold text-xl">
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/signup">
          <p className="text-center">Sign Up</p>
          <div className="h-1 w-full bg-orange-400"></div>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center pt-20 gap-5"
      >
        <input
          className="w-full border-2 border-solid border-black py-2 px-4 my-2 rounded-lg"
          type="text"
          value={username}
          name="username"
          placeholder="Enter your Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="w-full border-2 border-solid border-black py-2 px-4 my-2 rounded-lg"
          type="text"
          value={password}
          name="password"
          placeholder="Enter a Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="py-2 px-5 bg-orange-400 rounded-lg border-2 border-solid border-black">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
