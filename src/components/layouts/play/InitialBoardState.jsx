export const initialBoardState = [
  // ... array representando las piezas en el tablero
  { color: "#f0d9b5", pieceType: "rook", pieceColor: "black" }, // A8
  { color: "#b58863", pieceType: "knight", pieceColor: "black" }, // B8
  { color: "#f0d9b5", pieceType: "bishop", pieceColor: "black" }, // C8
  { color: "#b58863", pieceType: "queen", pieceColor: "black" }, // D8
  { color: "#f0d9b5", pieceType: "king", pieceColor: "black" }, // E8
  { color: "#b58863", pieceType: "bishop", pieceColor: "black" }, // F8
  { color: "#f0d9b5", pieceType: "knight", pieceColor: "black" }, // G8
  { color: "#b58863", pieceType: "rook", pieceColor: "black" }, // H8
  // Siguiente fila (fila 7, peones negros)
  { color: "#b58863", pieceType: "pawn", pieceColor: "black" }, // A7
  { color: "#f0d9b5", pieceType: "pawn", pieceColor: "black" }, // B7
  { color: "#b58863", pieceType: "pawn", pieceColor: "black" }, // C7
  { color: "#f0d9b5", pieceType: "pawn", pieceColor: "black" }, // D7
  { color: "#b58863", pieceType: "pawn", pieceColor: "black" }, // E7
  { color: "#f0d9b5", pieceType: "pawn", pieceColor: "black" }, // F7
  { color: "#b58863", pieceType: "pawn", pieceColor: "black" }, // G7
  { color: "#f0d9b5", pieceType: "pawn", pieceColor: "black" }, // H7
  // ... repite para las casillas B7 a H7
  // Filas vacías (filas 6 a 3)
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // A6
  { color: "#b58863", pieceType: null, pieceColor: null }, // B6
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // C6
  { color: "#b58863", pieceType: null, pieceColor: null }, // D6
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // E6
  { color: "#b58863", pieceType: null, pieceColor: null }, // F6
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // G6
  { color: "#b58863", pieceType: null, pieceColor: null }, // H6

  { color: "#b58863", pieceType: null, pieceColor: null }, // A5
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // B5
  { color: "#b58863", pieceType: null, pieceColor: null }, // C5
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // D5
  { color: "#b58863", pieceType: null, pieceColor: null }, // E5
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // F5
  { color: "#b58863", pieceType: null, pieceColor: null }, // G5
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // H5

  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // A4
  { color: "#b58863", pieceType: null, pieceColor: null }, // B4
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // C4
  { color: "#b58863", pieceType: null, pieceColor: null }, // D4
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // E4
  { color: "#b58863", pieceType: null, pieceColor: null }, // F4
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // G4
  { color: "#b58863", pieceType: null, pieceColor: null }, // H4

  { color: "#b58863", pieceType: null, pieceColor: null }, // A3
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // B3
  { color: "#b58863", pieceType: null, pieceColor: null }, // C3
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // D3
  { color: "#b58863", pieceType: null, pieceColor: null }, // E3
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // F3
  { color: "#b58863", pieceType: null, pieceColor: null }, // G3
  { color: "#f0d9b5", pieceType: null, pieceColor: null }, // H3

  // ... repite para todas las casillas hasta llegar a la fila 3
  // Fila de peones blancos (fila 2)
  { color: "#f0d9b5", pieceType: "pawn", pieceColor: "white" }, // A2
  { color: "#b58863", pieceType: "pawn", pieceColor: "white" }, // B2
  { color: "#f0d9b5", pieceType: "pawn", pieceColor: "white" }, // C2
  { color: "#b58863", pieceType: "pawn", pieceColor: "white" }, // D2
  { color: "#f0d9b5", pieceType: "pawn", pieceColor: "white" }, // E2
  { color: "#b58863", pieceType: "pawn", pieceColor: "white" }, // F2
  { color: "#f0d9b5", pieceType: "pawn", pieceColor: "white" }, // G2
  { color: "#b58863", pieceType: "pawn", pieceColor: "white" }, // H2
  // ... repite para las casillas B2 a H2
  // Fila de piezas blancas (fila 1)
  { color: "#b58863", pieceType: "rook", pieceColor: "white" }, // A1
  { color: "#f0d9b5", pieceType: "knight", pieceColor: "white" }, // B1
  { color: "#b58863", pieceType: "bishop", pieceColor: "white" }, // C1
  { color: "#f0d9b5", pieceType: "queen", pieceColor: "white" }, // D1
  { color: "#b58863", pieceType: "king", pieceColor: "white" }, // E1
  { color: "#f0d9b5", pieceType: "bishop", pieceColor: "white" }, // F1
  { color: "#b58863", pieceType: "knight", pieceColor: "white" }, // G1
  { color: "#f0d9b5", pieceType: "rook", pieceColor: "white" }, // H1
  // ... repite para las demás piezas blancas hasta H1
];
