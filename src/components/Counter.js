import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/Actions/counterActions';

const Counter = () => {

  const count = useSelector(state => state.f_counter.count);

  // const {count} = useReducer(rootReducer, incrementCounter)

  const dispatch = useDispatch();

  const handleIncrement = ()=>{
    dispatch(incrementCounter());
  }

  const handleDecrement = ()=>{
    dispatch(decrementCounter());
  }

  const handleReset = ()=>{
    dispatch(resetCounter());
  }

  return (
    <div className="container">
        <h2 className="text-center my-4">Welcome to Counter APP</h2>

        <h4 className='my-3 text-center'>Click To Increse, Decrease & Reset Number</h4>

        <h3 className="text-center">Count : {count} </h3>

        <div className="text-center my-4">
          <button className='btn btn-danger' onClick={handleDecrement} disabled={count > 0 ? false : true}>Decrement</button>
          {/* <button className='btn btn-primary mx-3' onClick={handleReset} disabled={count > 0 ? false : true} >Reset</button> */}
          <button className='btn btn-success' onClick={handleIncrement}>Increment</button>
        </div>

    </div>
  )
}

export default Counter