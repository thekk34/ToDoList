import React from "react";


// 1.Inseting js Variable in Jsx in Html heading attribute dynamically
// export default function  DynamicComponent()
// {
//      const name="Veer Zaara";
//      const rating="8.4";
//      return (
//           <>
//           <h1>Name:{name}</h1>
//           <h2>Rating:{rating}</h2>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis incidunt earum provident ducimus sequi, magni accusantium alias ipsa? Nobis, adipisci eligendi? Ea, natus?</p>
          
//           </>
//      )
// }

// Inseting JS expression 

//In File there is only one default export file and we import it by writing any names.
export default function DynamicComponent() {
     const name = "Veer Zaara";
     const rating = "8.4";
   
     // Function call invoked inside the component
     const summary = () => {
       return "This is a Romantic movie";
     };
   
     let age = 16;
     let canWatch = "Watch Now";
   
     // Updating the button text using your variable 
     if (age < 18) {
       canWatch = "Not Available";
     }

     //update button using function
     let age1=19
     function watchme(){
          if(age1>=18)
               return "Watch Now";
          
          return "Not Available";

     };
     return (
       <>
         <div>
           {/* img tag doesn't have a closing tag so we must self-close it */}
           <img
             src="Veer_Zaara.jpg"
             alt="Veer Zaara Poster"
             width="40%"
             height="40%"
           />
         </div>
         <h1>Name: {name}</h1>
         <h2>Rating: {rating}</h2>
   
         {/* JS Expression */}
         <p>{5 + 6 - 2 * 4}</p>
   
         {/* Dynamic Values Using Function Call */}
         <p>Summary: {summary()}</p>
   
         {/* Conditional Rendering in JSX */}
         <button>{age >= 18 ? "Watch" : "Not Available"}</button>
         
         {/* Button with text dynamically set using the variable */}
         <button>{canWatch}</button>

         {/* using function call do conditonal rendering */}
         <button>{watchme()}</button>
       </>
     );
}
// in Javascript for condition Rendering 
//  <button id="btn">{elem}</button>
// const elem=document.getElementById("btn");
// if(age>=18)
// {
//      elem.textContent="watch";
// }
// else{
//      elem.textContent="Not Available";
// } 



//Named Export :there will me multiple export file ,each named export must be explicitly exported.
export const MovieReview=()=>{
     return (
          <>
          <p>Good Movie</p>
          </>
     )
}

export const Movie=()=>{
     return(
          <>
          <p>Ranjha</p>
          </>
     )
}