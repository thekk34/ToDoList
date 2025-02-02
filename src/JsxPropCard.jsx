import React from 'react'

const JsxPropCard = (props) => {
  return (
    <div>
     <h2>Name:{props.name}</h2>
     <p>Age:{props.age}</p>
     <p>Occupation:{props.occupation}</p>
     <p>Greeting is a Jsx which can use simple props technique as for variable {props.greeting}</p>
     <div>ChildrenProps:{props.children}</div>
    </div>
  )
}

export default JsxPropCard