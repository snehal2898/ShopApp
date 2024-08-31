import { useRef, useState } from "react";

const StopWatch = ()=>{
    // state variables
    const [startTime,setStateTime] = useState(null)
    const [currentTime,setCurrentTime] = useState(null)

    // ref object
    const intervalRef = useRef(null)

    const handleStart = ()=>{
        setStateTime(Date.now())
        setCurrentTime(Date.now())

        //clear time interval before starting
        clearInterval(intervalRef.current)

        // change the current time after some time interval
        // store the time interval in ref
        intervalRef.current = setInterval( ()=>{
                setCurrentTime(Date.now())
        },10  )  // time interval is 10 milliseconds

    }

    const handleStop = ()=>{

        // clear the time interval
        clearInterval(intervalRef.current)

    }

    let seconds = 0, minutes = 0

    if(startTime!=null && currentTime!=null){
        const durationInMillisecs = currentTime - startTime
        seconds = (durationInMillisecs/1000)%60
        minutes = Math.floor(durationInMillisecs/(1000*60)) 
    }

        seconds = seconds<10?"0"+seconds.toFixed(2):seconds.toFixed(2)
        minutes = minutes<10?"0"+minutes:minutes

    return (
        <div>
            <h1>Stop Watch</h1>
            <h2> {minutes}:{seconds} </h2>
            <button onClick={handleStart} className="mx-2 p-3 btn btn-success">Start</button>
            <button onClick={handleStop} className="ms-2 p-3 btn btn-danger">Stop</button>
        </div>
    )

}

export default StopWatch;