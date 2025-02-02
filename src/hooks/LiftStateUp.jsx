import React from 'react'
import { useState } from 'react';
const LiftStateUp = () => {
  const [inputValue,setInputValue]=useState("");
  return (
    <>
    <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
    <DisplayComponent inputValue={inputValue}/>
    </>
  );
};

export default LiftStateUp;

const InputComponent=(props)=>{
     const {inputValue,setInputValue}=props;
     
     //in inputComp we create inputValue but it is not possible to show this state in displayContent
     //  so we have to pass this state up in parent Comp and used as props to show this content on display Content
     // const [inputValue,setInputValue]=useState("");
     return(
          <>
          <input type="text" placeholder="enter your name" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
          </>
     );
};
const DisplayComponent=({inputValue})=>{

     return(
          <>
          <p>The current input value is:{inputValue}</p>
          </>
     );

};

