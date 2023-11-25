import React from "react";
import "../../assets/css/homepage/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav>
        <div className="container__navbar">
          <div className="container__up-navbar">
            <div className="logo">
              <Link to="/home"></Link>
            </div>
            <div className="homepage__play">
              <div className="play__logo"></div>
              <div className="homepage__category">
                <span>Play</span>
              </div>
            </div>
            <div className="homepage__play">
              <div className="puzzles__logo"></div>
              <div className="homepage__category">
                <span>Puzzles</span>
              </div>
            </div>
            <div className="homepage__play">
              <div className="learn__logo"></div>
              <div className="homepage__category">
                <span>Learn</span>
              </div>
            </div>
            <div className="homepage__play">
              <div className="watch__logo"></div>
              <div className="homepage__category">
                <span>Watch</span>
              </div>
            </div>
            <div className="homepage__play">
              <div className="news__logo"></div>
              <div className="homepage__category">
                <span>News</span>
              </div>
            </div>
            <div className="homepage__play">
              <div className="social__logo"></div>
              <div className="homepage__category">
                <span>Social</span>
              </div>
            </div>
            <div className="homepage__play">
              <div className="more__logo"></div>
              <div className="homepage__category">
                <span>...More</span>
              </div>
            </div>
            <div className="homepage__search">
              <input type="text" placeholder="Search" />
            </div>
            <div className="button__signup">
              <button className="homepage__signup">Sign up</button>
            </div>
            <div className="button_login">
              <button className="homepage__login">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
