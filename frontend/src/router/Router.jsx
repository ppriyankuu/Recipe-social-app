/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import Saved from "../pages/Saved";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
