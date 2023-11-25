import React from "react";
import { ReactComponent as KingWhite } from "../../../assets/images/king__white.svg";
import { ReactComponent as QueenWhite } from "../../../assets/images/queen__white.svg";
import { ReactComponent as KingBlack } from "../../../assets/images/king__black.svg";
import { ReactComponent as QueenBlack } from "../../../assets/images/queen__black.svg";

const ChessPiece = ({ type, color }) => {
  const getPieceComponent = () => {
    if (color === "white") {
      switch (type) {
        case "king":
          return KingWhite;
        case "queen":
          return QueenWhite;
        // Casos para otras piezas blancas
      }
    } else if (color === "black") {
      switch (type) {
        case "king":
          return KingBlack;
        case "queen":
          return QueenBlack;
        // Casos para otras piezas negras
      }
    }
  };

  const PieceComponent = getPieceComponent();

  return PieceComponent ? <PieceComponent /> : null;
};

export default ChessPiece;
