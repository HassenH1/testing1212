import React from "react";

const style = {
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

function Square({ value, i }) {
  return (
    <button
      style={i % 8 === 0 ? { background: "white" } : { background: "black" }}
    >
      {value}
    </button>
  );
}

export default Square;
