import { useEffect, useState } from "react";

const CountEffect = ()=>{

    const [count,setCount] = useState(0)

    useEffect( ()=>{
        // setup function
        // update the state count after some delay automatically
        const timeout = setTimeout( ()=>{
            setCount(count+1)
        },5000);   // after 5000ms (5 seconds) count is updated

        // cleanup function
        return ()=>{
            // clearing the timeout in cleanup function
            clearTimeout(timeout);
        }

    }, [count] );   // state as dependencies

    return <h1> Count { count } times </h1>

}

export default CountEffect;
