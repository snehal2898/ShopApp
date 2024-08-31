import { useState } from "react";
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";

const CommonParent = ()=>{

    // message is state of CommonParent
    const [message,setMessage] = useState('')

    const handleMessage = (e)=>{
        setMessage(e.target.value)
    }

    return (
        <div className="border border-2 border-success rounded">
            <InputComponent inMsg={message} onMsgInput={handleMessage}/>
            <OutputComponent msg={message} />
        </div>
    )

}

export default CommonParent;