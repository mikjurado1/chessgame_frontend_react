import Square from "./Square";
import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";

const initialBoardState = [
  // ... array representando las piezas en el tablero
  { pieceType: "rook", pieceColor: "black" }, // A8
  { pieceType: "knight", pieceColor: "black" }, // B8
  { pieceType: "bishop", pieceColor: "black" }, // C8
  { pieceType: "queen", pieceColor: "black" }, // D8
  { pieceType: "king", pieceColor: "black" }, // E8
  { pieceType: "bishop", pieceColor: "black" }, // F8
  { pieceType: "knight", pieceColor: "black" }, // G8
  { pieceType: "rook", pieceColor: "black" }, // H8
  // Siguiente fila (fila 7, peones negros)
  { pieceType: "pawn", pieceColor: "black" }, // A7
  { pieceType: "pawn", pieceColor: "black" }, // B7
  { pieceType: "pawn", pieceColor: "black" }, // C7
  { pieceType: "pawn", pieceColor: "black" }, // D7
  { pieceType: "pawn", pieceColor: "black" }, // E7
  { pieceType: "pawn", pieceColor: "black" }, // F7
  { pieceType: "pawn", pieceColor: "black" }, // G7
  { pieceType: "pawn", pieceColor: "black" }, // H7
  // ... repite para las casillas B7 a H7
  // Filas vacías (filas 6 a 3)
  { pieceType: null, pieceColor: null }, // A6
  { pieceType: null, pieceColor: null }, // B6
  { pieceType: null, pieceColor: null }, // C6
  { pieceType: null, pieceColor: null }, // D6
  { pieceType: null, pieceColor: null }, // E6
  { pieceType: null, pieceColor: null }, // F6
  { pieceType: null, pieceColor: null }, // G6
  { pieceType: null, pieceColor: null }, // H6

  { pieceType: null, pieceColor: null }, // A5
  { pieceType: null, pieceColor: null }, // B5
  { pieceType: null, pieceColor: null }, // C5
  { pieceType: null, pieceColor: null }, // D5
  { pieceType: null, pieceColor: null }, // E5
  { pieceType: null, pieceColor: null }, // F5
  { pieceType: null, pieceColor: null }, // G5
  { pieceType: null, pieceColor: null }, // H5

  { pieceType: null, pieceColor: null }, // A4
  { pieceType: null, pieceColor: null }, // B4
  { pieceType: null, pieceColor: null }, // C4
  { pieceType: null, pieceColor: null }, // D4
  { pieceType: null, pieceColor: null }, // E4
  { pieceType: null, pieceColor: null }, // F4
  { pieceType: null, pieceColor: null }, // G4
  { pieceType: null, pieceColor: null }, // H4

  { pieceType: null, pieceColor: null }, // A3
  { pieceType: null, pieceColor: null }, // B3
  { pieceType: null, pieceColor: null }, // C3
  { pieceType: null, pieceColor: null }, // D3
  { pieceType: null, pieceColor: null }, // E3
  { pieceType: null, pieceColor: null }, // F3
  { pieceType: null, pieceColor: null }, // G3
  { pieceType: null, pieceColor: null }, // H3

  // ... repite para todas las casillas hasta llegar a la fila 3
  // Fila de peones blancos (fila 2)
  { pieceType: "pawn", pieceColor: "white" }, // A2
  { pieceType: "pawn", pieceColor: "white" }, // B2
  { pieceType: "pawn", pieceColor: "white" }, // C2
  { pieceType: "pawn", pieceColor: "white" }, // D2
  { pieceType: "pawn", pieceColor: "white" }, // E2
  { pieceType: "pawn", pieceColor: "white" }, // F2
  { pieceType: "pawn", pieceColor: "white" }, // G2
  { pieceType: "pawn", pieceColor: "white" }, // H2
  // ... repite para las casillas B2 a H2
  // Fila de piezas blancas (fila 1)
  { pieceType: "rook", pieceColor: "white" }, // A1
  { pieceType: "knight", pieceColor: "white" }, // B1
  { pieceType: "bishop", pieceColor: "white" }, // C1
  { pieceType: "queen", pieceColor: "white" }, // D1
  { pieceType: "king", pieceColor: "white" }, // E1
  { pieceType: "bishop", pieceColor: "white" }, // F1
  { pieceType: "knight", pieceColor: "white" }, // G1
  { pieceType: "rook", pieceColor: "white" }, // H1
  // ... repite para las demás piezas blancas hasta H1
];

export const ChessBoard = () => {
  const [boardState, setBoardState] = useState(initialBoardState);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleSquareClick = (squareIndex) => {
    const selectedSquare = boardState[squareIndex];
    if (selectedSquare.pieceType && !selectedPiece) {
      // Seleccionar la pieza en esta posición

      setSelectedPiece({ index: squareIndex, ...selectedSquare });
    } else if (selectedPiece) {
      // Mover la pieza seleccionada a la nueva posición
      // Actualizar el estado del tablero
      setSelectedPiece({ ...selectedPiece, newIndex: squareIndex });
    }
  };

  useEffect(() => {
    // Solo mover la pieza si se ha seleccionado una nueva posición
    if (selectedPiece && selectedPiece.newIndex !== undefined) {
      movePiece(selectedPiece.newIndex);
    }
  }, [selectedPiece]);

  // Ejemplo básico, no incluye validación de reglas de ajedrez
  const movePiece = (pieceType, pieceColor, toIndex) => {
    console.log(
      "pieceType, pieceColor, toIndex",
      pieceType,
      pieceColor,
      toIndex
    );
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
        console.log(squareIndex, pieceType, pieceColor);
        board.push(
          <Square
            key={squareIndex}
            color={isDark ? "#b58863" : "#f0d9b5"}
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
    </div>
  );
};
