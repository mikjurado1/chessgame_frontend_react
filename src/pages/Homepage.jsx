import React from "react";
import MainContent from "../components/layouts/MainContent";
import Sidebar from "../components/layouts/Sidebar";
import "../assets/css/homepage/homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Homepage;
