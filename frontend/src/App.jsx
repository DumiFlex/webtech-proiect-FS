import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import ForgotPassword from "./pages/forgot-password/ForgotPassword.jsx";
import ResetPassword from "./pages/reset-password/ResetPassword.jsx";
import Footer from "./components/Footer.jsx";
import StudentDashBoard from "./pages/dashboard/StudentDashBoard.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div
        className={`relative w-full h-screen bg-cover bg-center bg-fixed backdrop-blur-xs`}
      >
        <div className="flex h-screen w-screen justify-center items-center">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={<StudentDashBoard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
