export const RowLabel = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {["8", "7", "6", "5", "4", "3", "2", "1"].map((number) => (
        <div
          style={{
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export const ColumnLabel = () => {
  return (
    <div style={{ display: "flex" }}>
      {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
        <div
          style={{
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};
