import React from 'react'
import JsxPropCard from './JsxPropCard';
const JsxProp = () => {
  return (
    <div>
     <h1>JSX Props</h1>
     <JsxPropCard
     name="John Doe"
     age={30}
     occupation="Software Engineer"
     greeting={
          //jsx prop we import by normal prop fucntion
          <div>
          <p>Hi, my name is John Doe and I am 30 years old</p>
          </div>
     }
     >
          <p>Anything That is written between components is childeren props </p>
          <p>Hobbies: Reading ,Playing Cricket</p>
          <button> Contact me</button>
     </JsxPropCard>

     <JsxPropCard
     name="Raj"
     age={23}
     occupation="Civil Engineer"
     greeting={
          <div>
          <p>Hi, my name is Raj and I am 23 years old</p>
          </div>
     }
     >
          <p>Hobbies: Reading ,Playing Cricket</p>
          <button> Contact me</button>
     </JsxPropCard>
     </div>
  )
}

export default JsxProp;

// We use traditonal function becz it supports hoisting here 
// function JsxPropCard(props){
//      return(
//           <>
//           <h2>Name:{props.name}</h2>
//           <p>Age:{props.age}</p>
//           <p>Occupation:{props.occupation}</p>
//           <p>Greeting:{props.greeting}</p>
//           <div>{props.children}</div>
//           </>
//      );
// }