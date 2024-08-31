const OutputComponent = ({msg})=>{

    return (
        <div className="border border-2 border-warning rounded m-2 p-2">
            <h2>You entered message : {msg} </h2>
        </div>
    )

}

export default OutputComponent;