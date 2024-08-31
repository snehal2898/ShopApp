import Component4 from "./Component4"

const Component3 = ()=>{

    return (
        <div className="border border-2 border-success rounded m-2 p-2">
            {/* <Component4 message={message}/> */}

            {/* Overriding Context for a part of Component Tree */}
            {/* <MyContext.Provider value="Hii Bye BYe Hii">
                <Component4/>
            </MyContext.Provider> */}

            <Component4/>
        </div>
    )

}

export default Component3