import { useState } from 'react'
import Component2 from './Component2'
import {createContext} from 'react'

    // globally create Context object in Parent Component
    // export Context object from Parent Component

export const MyContext = createContext()

const Component1 = ()=>{

    // state message of Component1
    const [message,setMessage] = useState('')

    const handleMessageChange = e => setMessage(e.target.value)

    return (
        <div className='border border-2 border-primary rounded m-2 p-2'>

            <input placeholder='Enter Your Message' value={message} onChange={handleMessageChange} />

            <MyContext.Provider value={message}>
                <Component2/>
            </MyContext.Provider>

                {/* <Component2 message={message}/> */}

        </div>
    )

}

export default Component1;