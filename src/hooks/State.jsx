import {useState} from "react";
import '../EV.css';
export const State=()=>{
     // let count=0;
     // const handleClick=()=>
     // {
     //      count++;
     //      console.log(count);
     // };
     // let array=useState();
     // console.log(array);
     console.log("Parent Rerendered");
     const [count,setCount]=useState(0);
     const handleClick=()=>{
          setCount(()=>count+1);
     }
     return(
          <>
          <section className="main-div">
          <h1>{count}</h1>
          <button onClick={handleClick}>Increment</button>
          </section>
          <ChildComponent/>
          </>

     );
}
// How State works? 
//if parent component state changes then rule says that there child component state also changes
//if we click on Increment button it will rendered both parent component and child component
// in main.jsx there is React.StrictMode and if parent  component is rendered then it will render twice becz of React.Strict Mode 
function ChildComponent(){
     
     console.log("Child Rendered");
     return <div className="main-div">
          <h2>Child Component</h2>
          </div>
}

// Make a Diiferent Component which is not a part of parent component:Sibling Component
// Now if we touch on parent button only parent and its child Component rerenders
export const Sibling=()=>
{
     console.log("sibling Component rendered")
     return (
          <div className="main-div">
               <h2>Sibling Component</h2>
          </div>

     );
}