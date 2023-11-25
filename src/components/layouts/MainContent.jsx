import React from "react";
import "../../assets/css/homepage/maincontext.css";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <>
      <div className="main__container">
        <div className="hero__container"></div>
        <div className="title__container">
          <div className="titleup__container">
            <span>Play Chess</span>
            <span>Online</span>
            <span>on the #1 Site</span>
          </div>
          <div className="title__homepage">
            <div className="title">
              <span>13,509,269 </span>
              <span className="games__gray">Games Today</span>
            </div>
            <div className="games__playing">
              <div className="playing__now">
                <span className="title">98,116 </span>
                <span className="playing__gray">Playing Now</span>
              </div>
            </div>
          </div>
          <div className="button__playonline">
            <div className="button__playonlineshadow">
              <div className="logobutton__playonline"></div>
              <div className="text__playonline">
                <Link to="/play">Play Online</Link>
                <span>Play with someone at your level</span>
              </div>
            </div>
          </div>
          <div className="button__playcomputer">
            <div className="button__playcomputershadow">
              <div className="logobutton__playcomputer"></div>
              <div className="text__playcomputer">
                <Link>Play Computer</Link>
                <span>Play vs customizable training bots</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
