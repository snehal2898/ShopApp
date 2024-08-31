import { useRef } from 'react'

const CountRef = ()=>{

    const ref = useRef(0)

    const handleClick = ()=>{
        ref.current = ref.current + 1;
        console.log(ref.current)
    }

    return(

        <button onClick={handleClick}> {ref.current} </button>
    )

}

export default CountRef;