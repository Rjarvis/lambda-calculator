import React, {useState} from "react";
//like StudentsList in Brian's code-pen;
//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file


const Numbers = props => {
  // STEP 2 - add the imported data to state
  const[numberState, setNumberState] = useState("numbers");
  /* STEP 3 - Use .map() to iterate over your array data and return a button 
    component matching the name on the provided file. Pass
    it any props needed by the child component*/
  return (
    <div>
      {
        props.numbers.map(numberElement =>{
          return <NumberButton number={numberElement}/>;
        })
       }
    </div>
  );
};

export default Numbers;
