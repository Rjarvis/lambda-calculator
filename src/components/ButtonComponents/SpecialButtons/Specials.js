import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  console.log("Specials.js: Specials: props", props);
  const [specialState, setSpecialState] = useState("specials");
  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
  return (
    <div className={props.specialsContainer}>
      {
        props.specials.map(specialsElement =>{
          return <SpecialButton className={props.className} special={specialsElement}/>;
        })
      }
    </div>
  );
};

export default Specials;