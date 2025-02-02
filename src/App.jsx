import React from "react";
// import Component from "./Component";






// export const App=()=>{
 // Arrays with Keys ......this concept is used before fragment introduced before React 16
//  return([<Component key="1"/>, <Component key="2"/>])
// This remove extra div ...run project open element and see there is not this <div>==$0


// In This extra div is there becz we not used React.Fragments and not used Array with keys  

//  return(
//   <div>
//   <h1>Component</h1>
//   <p>For rendering multiple card we have to reuse same code many time
//   there comes a components which is nothing but a Javasript function which can return jsx Code.
//   Below we Render Components.jsx so that we have to not write same code again and again</p>
//   <Component/>
//   <Component/>
//   <Component/>
//   <div>
//     <div>
      
//       <img src="Veer_Zaara.jpg" alt="Veer_Zaara.jpg" width="40%" height="40%"/>
//     </div>
//     <h1>Veer Zaara</h1>
//     <p>Veer-Zaara is a 2004 Indian Hindi-language epic romantic drama musical film directed and produced by Yash Chopra, and written by his son Aditya Chopra.</p>
//   </div>
  
//   </div>

    // return(
    //   <>
    //   <Component/>
    //   <Component/>
    //   <Component/>
    //   </>
    // )

    //Using Dynamic componet where variable ,JS expression are passed in jsx(React Component)
//     return(
//       <>
//       <DynamicComponent/>
//       <DynamicComponent/>
//       </>
//     )
    
//   // )
// }




/* <h1>Hello ,Karunesh </h1> */
// console.log(React.createElement('h1',null,"Hello Karunesh")); React.createElement is object which is rendered with dom

//  <div>
//       <div>
//          img tag doen't have closing tag so we have to put between div tag 
//         <img src="Veer_Zaara.jpg" alt="Veer_Zaara.jpg" width="40%" height="40%"/>
//       </div>
//       <h1>Veer Zaara</h1>
//       <p>Veer-Zaara is a 2004 Indian Hindi-language epic romantic drama musical film directed and produced by Yash Chopra, and written by his son Aditya Chopra.</p>
// </div>



//Dynamic Component is default import so,we don't put in curly braces and also changed their name
// Movie,MovieReviw is named import that's why we put in curly braces and it's name can'be change same as named export name

// import DynamicComponent, { Movie, MovieReview } from "./DynamicComponent";
// // Named export 
// export const App=()=>{
//   return (
//     <>
//     <DynamicComponent/>
//     <Movie/>
//     <MovieReview/>
//     </>
//   )

// }


//  import React from 'react';
 import NetflixSeries from "./NetflixSeries";


//  import "./Netflix.css";
import "./Netflix.module.css";
 
 export const App = () => {
   return (
     <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
     <NetflixSeries/>
     </section>
   )
 }
 
 