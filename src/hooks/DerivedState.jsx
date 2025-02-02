
import React, { useState } from 'react'
// const users=[
//      {name:"Alice",age:25},
//      {name:"Bob",age:30},
//      {name:"Charlie",age:35},
//      {name:"Angles",age:45},
// ];
const DerivedState = () => {
     //useState with Objects
   const [users,setUser]=useState([{name:"Alice",age:25},
          {name:"Bob",age:30},
          {name:"Charlie",age:35},
          {name:"Angles",age:45}
     ]); 
     
     // derived state: A variable which depends on state and calculated when need ....

     console.log(users);
     const userCount=users.length;
     //Derived State:average age of users
     const averageAge=
     users.reduce((accum,currEle)=>accum+currEle.age,0)/users.length;


  return (
    <div className='main-div'>
     <h1>USer List</h1>
     <ul>
          {
               users.map((ele,index)=>{
                    return( <>
                    <li key={index}>
                     {ele.name}-{ele.age} year old    
                    </li>                    
                         
                    </>
                    );

               })
          }
     </ul>
     <p>Total Users:{userCount}</p>
     <p>Total average age:{averageAge}</p>
    </div>
  );
}

export default DerivedState;