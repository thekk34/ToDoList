
import React from "react";
import seriesData from "./api/seriesData.json";

// Learn Map: Looping in Jsx so that we can reduce data using map

// const NetflixSeries=()=>{
     

//      return(
//           <ul>
//           {seriesData.map((currEle)=>{
//              return ( <li key={currEle.id}>
//                <div>
//                     <img src={currEle.img_url} alt="currEle.name"   width="40%" height="40%"/>
//                </div>
//                <h2>Name:{currEle.name}</h2>
//                <h3>Rating:{currEle.rating}</h3>
//                <p>Summary:{currEle.description}</p>
//                <p>Genre:{currEle.genre}</p>
//                <p>Cast: {currEle.cast}</p>
//                <a href={currEle.watch_url} target="_blank">
//                     <button>
//                          Watch Now
//                     </button>
//                </a>

//           </li>
//              );

//           })}
          

//           {/* we use map so that we don't have to write same pice of code again and again  */}

//           {/* <li>
//                <div>
//                     <img src={seriesData[1].img_url} alt="Queen of Things"   width="40%" height="40%"/>
//                </div>
//                <h2>Name:{seriesData[1].name}</h2>
//                <h3>Rating:{seriesData[1].rating}</h3>
//                <p>Summary:{seriesData[1].description}</p>
//                <p>Genre:{seriesData[1].genre}</p>
//                <p>Cast: {seriesData[1].cast}</p>
//                <a href={seriesData[1].watch_url} target="_blank">
//                     <button>
//                          Watch Now
//                     </button>
//                </a>

//           </li>
//           <li>
//                <div>
//                     <img src={seriesData[2].img_url} alt="Queen of Things"   width="40%" height="40%"/>
//                </div>
//                <h2>Name:{seriesData[2].name}</h2>
//                <h3>Rating:{seriesData[2].rating}</h3>
//                <p>Summary:{seriesData[2].description}</p>
//                <p>Genre:{seriesData[2].genre}</p>
//                <p>Cast: {seriesData[2].cast}</p>
//                <a href={seriesData[2].watch_url} target="_blank">
//                     <button>
//                          Watch Now
//                     </button>
//                </a>

//           </li> */}
//           </ul>  
//      );
// }
// export default NetflixSeries;



// transferring data from parent to child using props 
// import SeriesProp from "./SeriesProp";
import SeriesPropModule from "./SeriesPropModule";
const NetflixSeries=()=>{
     return(
          <ul className="grid grid-three--cols">
          {seriesData.map((currEle)=>(
               // <SeriesProp key={currEle.id} currEle={currEle}/>
               // <SeriesProp key={currEle.id} data={currEle}/>
               <SeriesPropModule key={currEle.id} data={currEle}/>
          ))}
          </ul>
     );
};

export default NetflixSeries;