import React from "react";/* Display a button element rendering the data being passed down from the parent container on props */

const SpecialButton = props => {
  const special = props.special;
  const className = props.className;
  return (
    <button className={className}>
      {special}
      {console.log("SpecialButton.js: SpecialButton: special", special)}
    </button>
  );
};

export default SpecialButton;