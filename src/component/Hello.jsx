import React from "react";

function Hello() {
  let number = Math.random() * 100;
  return (
    <h1 style={{ backgroundColor: "#776691" }}>
      blo number is:{Math.round(number)}
    </h1>
  );
}

export default Hello;
