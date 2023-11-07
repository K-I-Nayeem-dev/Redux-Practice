import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementBy5 } from '../app/features/counters/CounterSlice';

const ReduxToolCounter = () => {

    const count = useSelector(state => state.counter.count);

    const dispatch = useDispatch();



  return (
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center my-4">
                <h2>Redux Tools Counter</h2>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-lg-8 text-center my-3">
                <h4>Count : {count}</h4>
                <button  className="btn btn-success my-2 mx-4" onClick={()=>dispatch(incrementBy5(5))}>Increment By 5</button>
                <button disabled={count > 0 ? false : true} className="btn btn-danger my-2 " onClick={()=>dispatch(decrement())}>Decrement</button>
                <button disabled={count > 0 ? false : true} className="btn btn-primary my-2 mx-4" onClick={()=>dispatch(reset())}>Reset</button>
                <button  className="btn btn-success my-2" onClick={()=>dispatch(increment())}>Increment</button>
            </div>
        </div>
    </div>
  )
}

export default ReduxToolCounter