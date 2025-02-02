import React from 'react'
import "./EV.css"

const EventHandling = () => {
  const handleButtonClick=(event)=>{ 
       console.log("Button Clicked");
       console.log(event); //this show syntehtic based event 
       console.log(event.target);
       console.log(event.type);

       alert("button clicked");
  }; 
  const handleWelcomeUSer=(user)=>
     {
          console.log(` hello ${user},Welcome`);
     };  
  return (
    <>
     {/* Function Components with Named Functions - */}
     {/* Remember how we haven't called this function, if you call this
      function here  then it will run without even clicking. You just
      need to pass reference and not call here. handleButtonClick() not allowed */}
      <button onClick={handleButtonClick}>Click Me</button>

      <br/>
      
      {/* Fat Arrow Function  */}
      {/* In React, event handlers receive the event object as an argument by default.
     However, when you use an arrow function directly in the onClick attribute without
     passing the event explicitly, React doesn't pass the event object to your handler
     function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}
     <button onClick={(event)=>handleButtonClick(event)}>Click Me 2</button>

      <br />
      {/* Inline Event handlers  */}
      <button onClick={(event)=>console.log(event)}>Inline Function</button>

      {/* function component with inline arrow functions  */}
      <button onClick={()=>alert("hey i am inline event function")}>Inline Arr Function</button>

      {/* Passing Arguments to Event Handlers  */}
      <button onClick={handleWelcomeUSer("vinod")}>Welcome Me</button>
      <button onClick={()=>handleWelcomeUSer("Ram")}>Welcome Me 2</button>


    </>
  )
}

export default EventHandling