import React from "react";

const Square = ({ color, children }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
      }}
    >
      {children}
    </div>
  );
};

export default Square;
