import React from "react";

const OperatorButton = props => {
  const operator = props.operator;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        operator
      }
    </>
  );
};

export default OperatorButton;