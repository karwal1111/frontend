import React, { useState } from "react";

const Test = () => {
  const [color, setColor] = useState("white");

  const handleClick = () => {
    setColor("red");
  };
  const containerStyle = {
    padding: '20px',
    backgroundColor: 'lightblue'
  };
  return (
    <div style={containerStyle}>
      <h1 id="myh1" style={{ color: color }}>Testing in progress</h1>
      <button onClick={handleClick}>Change Color</button>
      <h2>Testing in progress</h2>
    </div>
  );
};

export default Test;

