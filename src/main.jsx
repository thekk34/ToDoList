import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// here importing using named import that's why it is in curly braces
//Name import have same name as export name
// import {App} from './App.jsx'
// import JsxProp from './JsxProp'
// import EventHandling from './EventHandling'
// import { EventProps } from './EventProps'
// import { EventPropagation } from './EventPropagation'
// import { Sibling, State } from './hooks/State'
// import './EV.css';
// import DerivedState from './hooks/DerivedState';
// import LiftStateUp from './hooks/LiftStateUp';
// import { ToggleSwitch } from './Project/ToggleSwitch/ToggleSwitch';
// import { Todo } from './Project/TodoApp/Todo'
// import { TodoUsingComp } from './Project/TodoApp/TodoUsingComp'
import { ToDoFull } from './Project/TodoApp/ToDoFull'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
     {/* <JsxProp /> */}
     {/* <EventHandling/> */}
     {/* <EventProps/> */}
     {/* <EventPropagation/> */}
     {/* <State/> */}
     {/* <Sibling/> */}
     {/* <DerivedState/> */}
     {/* <LiftStateUp/>*/}
     {/* <ToggleSwitch/> */}
     {/* <Todo/> */}
     {/* <TodoUsingComp/> */}
     <ToDoFull/>
  </StrictMode>,
)
