import React from "react";
const SeriesProp=(props)=>{
     //props desrturcting 
     // const {data}=props;
     const {id,img_url,name,rating,description,genre,cast,watch_url}=props.data;

     const button_style={
               padding:"1.2rem 2.4rem",
               border:"none",
               fontSize:"1.6rem",
               backgroundColor:`${rating>=8.5?"#7dcea0":"#f7dc6f"}`,
               color:"var(--btn-color)",
               fontWeight:"bold",
               cursor:"pointer",
     };
     const ratingClass= rating>=8.5?"super_hit":"average";

     return(
          
          <li className="card">
                  <div>
                     {/* <img src={props.data.img_url} alt={props.data.name}   width="40%" height="40%"/> */}

                     {/* const {data}=props  for this case use below */}
                     {/* <img src={data.img_url} alt={data.name}   width="40%" height="40%"/> */}

                     <img src={img_url} alt={name}   width="40%" height="40%"/>
                  </div>
                {/* <h2>Name:{props.data.name}</h2> */}
                {/* inline styles in React are specified using JS objects.Property Name are written in camelCase. */}
                <div className="card-content">
                <h2>Name:{name}</h2>

                {/* Adding style in h3 tag and add multiple class in styling in span tag  */}
                <h3 style={{margin:".2rem 0"}}>Rating:<span className={`rating timepass ${ratingClass}`}>{rating}</span></h3>

                <p >Summary:{description}</p>
                <p >Genre:{genre.join(",")}</p>
                <p >Cast: {cast.join(",")}</p>
                <a href={watch_url} target="_blank">
                     <button style={button_style}>
                          Watch Now
                     </button>
                </a>
                </div>

           </li>

     );
};
export default SeriesProp;