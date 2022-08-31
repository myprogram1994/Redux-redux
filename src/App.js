import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Increment,Decrement,Multiplication} from "./actions/index"
import './App.css';
function App() {
  const state=useSelector((state)=>state.IncrementDecrement)
  const dispatch=useDispatch();
  return (
    <div className="App">

      <h1>Increment/Decrement</h1>
      <h4>Using React and Redux </h4>
      <div className='container'>
      <button onClick={()=>dispatch(Decrement())}type="button" class="btn btn-primary">Increment</button>
        <input  className="text-center" value={state}></input>
        
        <button onClick={()=>dispatch(Increment())} type="button" class="btn btn-success">Decrement</button>
      </div>
      <button onClick={()=>dispatch(Multiplication())} type="button" class="btn btn-success">Multiplication by 2</button>
    </div>
  );
}

export default App;