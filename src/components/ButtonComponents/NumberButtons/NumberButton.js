import React from "react";

const NumberButton = props => {
  const number = props.number;
  return (
    <button>
      /* Display a button element rendering the data being passed down from the parent container on props */
      {number}
    </button>
  );
};

export default NumberButton;