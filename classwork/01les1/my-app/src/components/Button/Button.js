import React from "react";

const buttonStyles = {
  display: "inline-flex",
  margin: "0 4px",
  padding: "8px 24px",
  border: 0,
  borderRadius: 2,
  fontSize: 14,
  fontFamily: "inherit"
};

const Button = () => {
  return <button style={buttonStyles}> Submit </button>;
};

export default Button;
