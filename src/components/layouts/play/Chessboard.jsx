import Square from "./Square";

export const ChessBoard = () => {
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const isDark = (i + j) % 2 === 1;
        board.push(<Square color={isDark ? "#b58863" : "#f0d9b5"} />);
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
