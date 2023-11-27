import Square from "./Square";
import { useEffect, useState } from "react";
import { initialBoardState } from "./InitialBoardState";
import PieceControlMove from "./PieceControlMove";

export const ChessBoard = () => {
  const [boardState, setBoardState] = useState(initialBoardState);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedSquareIndex, setSelectedSquareIndex] = useState(null); // Nuevo estado para la casilla seleccionada
  const [countMovement, setCountMovement] = useState(0);

  console.log("countMovement....", countMovement);
  const handleSquareClick = (squareIndex) => {
    const selectedSquare = boardState[squareIndex];
    setSelectedSquareIndex(squareIndex);

    if (selectedSquare != null) {
      const isValidMove = PieceControlMove(
        selectedSquare.pieceType,
        selectedSquare.pieceColor,
        squareIndex,
        countMovement
      );
      if (isValidMove) {
        if (selectedSquare.pieceType && !selectedPiece) {
          // Seleccionar la pieza en esta posición
          setSelectedPiece({
            index: squareIndex,
            ...selectedSquare,
          });
          setCountMovement((countMovement) => countMovement + 1);
        }

        if (selectedPiece) {
          // Mover la pieza seleccionada a la nueva posición
          // Actualizar el estado del tablero

          setSelectedPiece({ ...selectedPiece, newIndex: squareIndex });
        }
      }

      // Actualiza la casilla seleccionada
    }
  };

  useEffect(() => {
    // Solo mover la pieza si se ha seleccionado una nueva posición
    if (selectedPiece && selectedPiece.newIndex !== undefined) {
      movePiece(
        selectedPiece.pieceType,
        selectedPiece.pieceColor,
        selectedPiece.newIndex
      );
    }
  }, [selectedPiece]);

  // Ejemplo básico, no incluye validación de reglas de ajedrez
  const movePiece = (pieceType, pieceColor, toIndex) => {
    let newBoardState = [...boardState];
    newBoardState[selectedPiece.index] = {
      pieceType: null,
      pieceColor: null,
    };

    newBoardState[toIndex] = {
      pieceType: selectedPiece.pieceType,
      pieceColor: selectedPiece.pieceColor,
    };

    setBoardState(newBoardState);

    setSelectedPiece(null);
  };

  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const squareIndex = i * 8 + j;
        const isDark = (i + j) % 2 === 1;
        const { pieceType, pieceColor } = boardState[squareIndex];
        const squareColor =
          squareIndex === selectedSquareIndex
            ? "#ff0000"
            : isDark
            ? "#f0d9b5"
            : "#b58863";

        board.push(
          <Square
            key={squareIndex}
            color={squareColor}
            pieceType={pieceType}
            pieceColor={pieceColor}
            onClick={() => handleSquareClick(squareIndex)}
          />
        );
      }
    }
    return board;
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 50px)" }}>
      {createBoard()}
      {/* {selectedPiece && (
        // <PieceControlMove
        //   pieceType={selectedPiece.pieceType}
        //   pieceColor={selectedPiece.pieceColor}
        //   newIndex={selectedPiece.newIndex}
        // />
      )} */}
    </div>
  );
};
