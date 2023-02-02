import React from "react";
import { useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./counterSlice";

const Counter = () => {
    const count = useSelector ((state) => state.counter.value);
    const xyz = useSelector ((state) => state.auth.value);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    };
    const handleDecrement = () => {
        dispatch(decrement())
    }
   
    // const handleIncrement = () => {
    //     //if (value<100)
    //     //setValue(value +1);
    // }
    // const handleDecrement = () => {
    //     //if(value>0)
    //     //setValue(value -1);
    // }
    return (
        <div>
                    <button onClick= {handleIncrement}>Increment</button>
                    {count}
                    {xyz}
                    
                    <button onClick= {handleDecrement}>Decrement</button>

        </div>
      )

}

export default Counter