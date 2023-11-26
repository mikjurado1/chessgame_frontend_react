import React, { useState } from "react";
import { ReactComponent as KingWhite } from "../../../assets/images/king__white.svg";
import { ReactComponent as QueenWhite } from "../../../assets/images/queen__white.svg";
import { ReactComponent as BishopWhite } from "../../../assets/images/bishop__white.svg";
import { ReactComponent as KnightWhite } from "../../../assets/images/knight__white.svg";
import { ReactComponent as RookWhite } from "../../../assets/images/rook__white.svg";
import { ReactComponent as PawnWhite } from "../../../assets/images/pawn__white.svg";

import { ReactComponent as KingBlack } from "../../../assets/images/king__black.svg";
import { ReactComponent as QueenBlack } from "../../../assets/images/queen__black.svg";
import { ReactComponent as BishopBlack } from "../../../assets/images/bishop__black.svg";
import { ReactComponent as KnightBlack } from "../../../assets/images/knight__black.svg";
import { ReactComponent as RookBlack } from "../../../assets/images/rook__black.svg";
import { ReactComponent as PawnBlack } from "../../../assets/images/pawn__black.svg";

const ChessPiece = ({ type, color, position, handleDrag, handleDrop }) => {
  const getPieceComponent = () => {
    if (color === "white") {
      switch (type) {
        case "king":
          return KingWhite;
        case "queen":
          return QueenWhite;
        case "bishop":
          return BishopWhite;
        case "knight":
          return KnightWhite;
        case "rook":
          return RookWhite;
        case "pawn":
          return PawnWhite;
        // Casos para otras piezas blancas
      }
    } else if (color === "black") {
      switch (type) {
        case "king":
          return KingBlack;
        case "queen":
          return QueenBlack;
        case "bishop":
          return BishopBlack;
        case "knight":
          return KnightBlack;
        case "rook":
          return RookBlack;
        case "pawn":
          return PawnBlack;
        // Casos para otras piezas negras
      }
    }
  };

  const PieceComponent = getPieceComponent();

  return (
    <div
      //onMouseDown={() => handleDrag(type, color, position)}
      //onMouseUp={handleDrop}
      style={
        {
          /* estilos para la pieza, incluyendo posición si se está arrastrando */
        }
      }
    >
      {PieceComponent ? <PieceComponent /> : null}
    </div>
  );
};

export default ChessPiece;
