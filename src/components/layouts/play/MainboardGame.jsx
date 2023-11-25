import React from "react";
import "../../../assets/css/mainboardgame/mainboardgame.css";
import { ColumnLabel, RowLabel } from "./RowLabel";
import { ChessBoard } from "./Chessboard";

const MainboardGame = () => {
  return (
    <>
      <div className="chessboard__container">
        <div className="gamer__one">
          <div className="logogamer__one"></div>
          <span>Oponent 2</span>
        </div>
        <div className="chessboard__game">
          <div className="rowlabel">
            <RowLabel />
          </div>
          <div>
            <ChessBoard />
            <ColumnLabel />
          </div>
        </div>
        <div className="gamer__two">
          <div className="logogamer__two"></div>
          <span>Oponent 1</span>
        </div>
      </div>
    </>
  );
};

export default MainboardGame;
