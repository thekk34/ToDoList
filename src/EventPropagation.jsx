import "./EV.css";
export const EventPropagation=()=>{

   const handleGrandParent=()=>{
     console.log("Grand Parent Clicked");
   };

   const handleParent=()=>{
     console.log("Parent clicked");
   };

   const handleClick=(event)=>{
     console.log(event);
     //for stopping propagation event
     event.stopPropagation();
     console.log("Child Clicked");
   }




     return(
          <>
          {/* Bubble Phase */}
          <section className="main-div">
               <div className="g-div" onClick={handleGrandParent}>
                    <div className="p-div" onClick={handleParent}>
                         <div className="c-div" onClick={handleClick}>
                              Child div
                         </div>
                    </div>
               </div>
          </section>

          {/* //Capture Phase  */}
          <section className="main-div">
               <div className="g-div" onClickCapture={handleGrandParent}>
                    <div className="p-div" onClickCapture={handleParent}>
                         <div className="c-div" onClickCapture={handleClick}>
                              Child div
                         </div>
                    </div>
               </div>
          </section>

          </>
     )
}