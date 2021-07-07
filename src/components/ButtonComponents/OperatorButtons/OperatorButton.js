import React from "react";

const OperatorButton = props => {
  const operator = props.operator;
  const className = props.className;
  console.log("OperatorButton.js: OperatorButton: props",props);
  return (
    <button className={className}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        operator
      }
    </button>
  );
};

export default OperatorButton;