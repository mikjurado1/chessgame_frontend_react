import React, { useState } from "react";

const PieceControlMove = (pieceType, pieceColor, newIndex, countMovement) => {
  const isValidMove = (pieceType, pieceColor, newIndex, countMovement) => {
    if (!pieceType || !pieceColor || newIndex == null) {
      console.log("debes seleccionar una ficha");
      return false;
    }
  };

  if (countMovement === 0) {
    if (pieceColor === "white") {
      console.log("has elegido un movimiento blanco muy bien");
      return true;
    } else {
      console.log("error, el primer movimiento debe ser blanco");
      return false;
    }
  }
  return <></>;
};

export default PieceControlMove;
