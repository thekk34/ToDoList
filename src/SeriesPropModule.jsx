// IN this we learn module css and styled components in react

import React from "react";
import styles from "./Netflix.module.css";
import styled from "styled-components";
//we make a styled components using styled-components
// for downloading styled component  in react project npm i styled-component  
const SeriesPropModule=(props)=>{
     //props desrturcting 
     // const {data}=props;
     const {id,img_url,name,rating,description,genre,cast,watch_url}=props.data;

     // const button_style={
     //           padding:"1.2rem 2.4rem",
     //           border:"none",
     //           fontSize:"1.6rem",
     //           backgroundColor:`${rating>=8.5?"#7dcea0":"#f7dc6f"}`,
     //           color:"var(--btn-color)",
     //           fontWeight:"bold",
     //           cursor:"pointer",
     // };

     //styled componets 1stway-object Component
     const MyButton=styled.button({
          padding:"1.2rem 2.4rem",
          border:"none",
          fontSize:"1.6rem",
          backgroundColor:`${rating>=8.5?"#7dcea0":"#f7dc6f"}`,
          color:"var(--btn-color)",
          fontWeight:"bold",
          cursor:"pointer",

     })
     //styled components-template literal
     const MyButton2=styled.button`
     padding:1.2rem 2.4 rem;
     border:none;
     font-size:1.6rem; 
     background-color:${(props)=>props.rating>=8.5? "#7dcea0" : "#f7dc6f"};
     color:var(--btn-color);
     font-weight:bold;
     cursor:pointer;
     `;

     const ratingClass= rating>=8.5?styles.super_hit:styles.average;

     return(
          
          <li className={styles.card}>
                  <div>
                     {/* <img src={props.data.img_url} alt={props.data.name}   width="40%" height="40%"/> */}

                     {/* const {data}=props  for this case use below */}
                     {/* <img src={data.img_url} alt={data.name}   width="40%" height="40%"/> */}

                     <img src={img_url} alt={name}   width="40%" height="40%"/>
                  </div>
                {/* <h2>Name:{props.data.name}</h2> */}
                {/* inline styles in React are specified using JS objects.Property Name are written in camelCase. */}
                <div className={styles["card-content"]}>
                <h2>Name:{name}</h2>

                {/* Adding style in h3 tag and add multiple class in styling in span tag  */}
                <h3 style={{margin:".2rem 0"}}>Rating:<span className={`{styles.rating} {styles.timepass} ${ratingClass}`}>{rating}</span></h3>

                <p >Summary:{description}</p>
                <p >Genre:{genre.join(",")}</p>
                <p >Cast: {cast.join(",")}</p>
                <a href={watch_url} target="_blank">
                     {/* <button style={button_style}>
                          Watch Now
                     </button> */}
                     <MyButton>Watch Now</MyButton>
                     <MyButton2 rating={rating}>Watch Me</MyButton2>
                </a>
                </div>

           </li>

     );
};
export default SeriesPropModule;