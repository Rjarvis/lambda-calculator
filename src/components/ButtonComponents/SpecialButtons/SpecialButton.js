import React from "react";/* Display a button element rendering the data being passed down from the parent container on props */

const SpecialButton = props => {
  const special = props.specials;
  return (
    <button>
      {special}
    </button>
  );
};

export default SpecialButton;