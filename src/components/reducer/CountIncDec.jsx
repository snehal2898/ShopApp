import {useReducer} from 'react'

// global reducer function outside of Component function
// reducer function accepts two parameters - 1]state 2]action
const countReducer = (state,action)=>{
    switch(action.type){
        case "INCREASE":
            return {...state,count:state.count+1}
        case "DECREASE":
            return {...state,count:state.count-1}
        case "INC BY 5":
            return {...state,count:state.count+action.payload}
        case "DEC BY 5":
            return {...state,count:state.count-action.payload}
        default:
            throw Error(`Invalid action: ${action.type}`)
    }
}  // end of reducer function


// Rect Component
const CountIncDec = ()=>{
    // calling react hook - useReducer
    const [state,dispatch] = useReducer(countReducer,{count:0})

    // event handlers
    const handleDecrement = ()=>{
        // call dispatch function with action type "DECREASE"
        // dispatch function takes action object as a parameter value
        dispatch({type:"DECREASE"})
    }

    const handleIncrement = ()=>{
        // call dispatch function with action type "INCREASE"
        // dispatch function takes action object as a parameter value
        dispatch({type:"INCREASE"})
    }

    const handleIncrementBy5 = ()=>{
        dispatch({type:"INC BY 5",payload:5})
    }

    const handleDecrementBy5 = ()=>{
        dispatch({type:"DEC BY 5",payload:5})
    }


    return (
        <div>
            <button onClick={handleDecrement} className='btn btn-warning m-2 p-2'>-</button>
            {state.count}
            <button onClick={handleIncrement} className='btn btn-warning m-2 p-2'>+</button>
            <button onClick={handleIncrementBy5} className='btn btn-warning m-2 p-2'>+ by 5</button>
            <button onClick={handleDecrementBy5} className='btn btn-warning m-2 p-2'>- by 5</button>
        </div>
    )

}

export default CountIncDec;