import React from "react";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

function TeacherDashboard() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Teacher Dashboard
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default TeacherDashboard;
