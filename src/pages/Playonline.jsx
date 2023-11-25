import React from "react";
import Sidebar from "../components/layouts/Sidebar";
import MainboardGame from "../components/layouts/play/MainboardGame";
import RightSide from "../components/layouts/play/RightSide";

const Playonline = () => {
  return (
    <>
      <div className="play__page">
        <Sidebar />
        <MainboardGame />
        <RightSide />
      </div>
    </>
  );
};

export default Playonline;
