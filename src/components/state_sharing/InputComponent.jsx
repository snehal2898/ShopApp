const InputComponent = ( {inMsg,onMsgInput} )=>{

    return (
        <div className="border border-2 border-primary rounded m-2 p-2">
            <label htmlFor="i1">Enter Your Message</label>
            <input id="i1" value={inMsg} onChange={onMsgInput} />
        </div>
    )

}

export default InputComponent;