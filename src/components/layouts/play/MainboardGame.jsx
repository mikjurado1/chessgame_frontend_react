import React from "react";
import "../../../assets/css/mainboardgame/mainboardgame.css";
import { ColumnLabel, RowLabel } from "./RowLabel";
import { ChessBoard } from "./Chessboard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
            <DndProvider backend={HTML5Backend}>
              <ChessBoard />
            </DndProvider>
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
