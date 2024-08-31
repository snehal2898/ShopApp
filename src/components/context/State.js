import { useContext, useState } from "react";
import { CountryContext } from "./Country";
import states from "../../database/state_of_country";
import City from "./City";

const State = ()=>{

    const countryId = useContext(CountryContext)
    const [stateId,setStateId] = useState(0)

    const handleStateChange = (e)=>setStateId(e.target.value)

    const filteredStates = states.filter(s=>s.country_id==countryId)

    return(
        <div>
            <label className="form-label mt-1">Select State</label>
            <select className="form-select" value={stateId} onChange={handleStateChange} >
                {filteredStates.map(s=><option key={s.id} value={s.id} > {s.name} </option>)}
            </select>
            { stateId!=0 &&
                <CountryContext.Provider value={stateId} >
                    <City/>
                </CountryContext.Provider>
            }
        </div>
    )

}

export default State;