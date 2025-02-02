import "./EV.css";
export const EventProps=()=>{
     const HandleWelcomeUser=(user)=>
     {
          console.log(` HI ${user}`);
     };
     const handleHover=()=>{
          alert(`hey thanks for hovering me`);
     };
     return (
          <>
          {/* onClick is used here as a props where HandleWelcomeUser properties
           send in child components . we can change name of props also .it is not mandatory to name onClick like React Event handlers */}
          <WelcomeUser Click={()=>HandleWelcomeUser("ram")} onMouseEnter={handleHover}/>
          </>
     );

};


// child component 
const WelcomeUser=(props)=>{

     const {Click,onMouseEnter}=props;
     const handleGreeting=()=>{
          console.log(`hey user ,welcome`);
          Click();
     };
     return(
          <>
          {/* in child component we can't change of name of event handlers,in parent we change because it used as props their  */}
          <button onClick={Click}>Click me</button>
          <button onMouseEnter={onMouseEnter}>Hover me</button>
          <button onClick={handleGreeting}>Greeting</button>
          </>

     );
};