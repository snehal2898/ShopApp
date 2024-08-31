import { useRef } from "react";

const InputFocus = ()=>{

    const inputRef = useRef(null)

    const handleClick = ()=>{
        // manipulating DOM using ref
        inputRef.current.focus()  // calling DOM API or Browser API (External API)
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={handleClick}>Click to Focus</button>
        </div>
    )

}

export default InputFocus;  