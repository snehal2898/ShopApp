import { useContext } from 'react'
import { MyContext } from './Component1';

const Component4 = ()=>{

    // call useContext hook to subscribe Child Component to the Context object
    // read the value stored in Context object
    const message = useContext(MyContext)

    return (
        <div className="border border-2 border-warning rounded m-2 p-2">
            <h2>Message is {message} </h2>
        </div>
    )

}

export default Component4;