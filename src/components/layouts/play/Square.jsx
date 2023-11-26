import React from "react";
import ChessPiece from "./ChessPiece";

const Square = ({ color, pieceType, pieceColor, onClick }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
      }}
      onClick={onClick}
    >
      {pieceType && <ChessPiece type={pieceType} color={pieceColor} />}
    </div>
  );
};

export default Square;
