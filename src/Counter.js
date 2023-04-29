import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch=useDispatch()
    const count1=useSelector((state)=>state.counter1)
    const count2=useSelector((state)=>state.counter2)
    const hideF=useSelector((state)=>state.hideF)
    const hideS=useSelector((state)=>state.hideS)

    const incrementHandler=()=>{
        dispatch({type:'INCREMENT'})
    }
    const decrementHandler=()=>{
        dispatch({type:'DECREMENT'})
    }
    const resetHandler=()=>{
        dispatch({type:'RESET'})
    }

    const hid1Handler=()=>{
        dispatch({type:'HIDE1'})
    }

    const hide2Handler=()=>{
        dispatch({type:'HIDE2'})
    }

    const hideFullHandler=()=>{
        dispatch({type:'ALLHIDE'})
    }
  return (
    <div>
        {hideF && <div>{count1}</div>}
        {hideS && <div>{count2}</div>}
        <button onClick={incrementHandler}>incement</button>
        <button onClick={decrementHandler}>decement</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={hid1Handler}>hide 1</button>
        <button onClick={hide2Handler}>hide 2</button>
        <button onClick={hideFullHandler}>hide all</button>
    </div>
  )
}

export default Counter