import React from "react";

const NumberButton = props => {
  const number = props.number;
  const className = props.className;
  return (
    <button className={className}>
      {number}{/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;