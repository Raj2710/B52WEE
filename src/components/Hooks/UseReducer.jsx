import React,{useReducer} from 'react'
import { Button } from 'react-bootstrap'
const initialValue = {
    count:0
}
function reducer(state,payload){
   switch(payload.action)
   {
    case 'add':return {
        ...state,
        count:state.count+1
    }
    case 'sub':return {
        ...state,
        count:state.count-1
    }
   }
}

function UseReducer() {
   
    let [state,dispatch] = useReducer(reducer,initialValue)

  return <div className='container-fluid'>

    <h1>useReducer Example</h1>

    <Button onClick={()=>dispatch({action:"sub"})}>-</Button> 
        {state.count} 
    <Button onClick={()=>dispatch({action:"add"})}>+</Button>

  </div>
}

export default UseReducer