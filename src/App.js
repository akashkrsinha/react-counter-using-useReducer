import React, { useReducer} from "react";
import "./style.css";

const initialState = {count:0}

function reducer(state, action){
  switch(action.type){
    case 'inc': return {count: state.count +1};
    case 'drc': return {count:state.count-1};
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick= {()=>{
        dispatch({type: 'drc'})
      }}>-</button>

      {state.count}


<button onClick= {()=>{
dispatch({type: 'inc'})
}}>+</button>
    </div>
  );
}
