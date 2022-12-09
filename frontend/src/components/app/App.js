import "./App.css";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../user/SignUpForm";
import Profile from "../profile/Profile";
import Home from "../home/Home";
import React, { useState } from "react";
import Feed from "../feed/Feed";
import { useNavigate, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home navigate={useNavigate()} />} />
      <Route path="/profile" element={<Profile navigate={useNavigate()} />} />
      <Route path="/posts" element={<Feed navigate={useNavigate()} />} />
      <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
      <Route path="/signup" element={<SignUpForm navigate={useNavigate()} />} />
    </Routes>
  );
};

export default App;
