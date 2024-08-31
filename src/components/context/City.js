import { useContext, useState } from "react";
import { CountryContext } from "./Country";
import cities from "../../database/city_of_state";

const City = ()=>{

    const stateId = useContext(CountryContext)
    const [city,setCity] = useState('')

    const filteredCities = cities.filter(c=>c.state_id==stateId)

    return(
        <div>
            <label className="form-label mt-1">Select City</label>
            <select className="form-select mb-2"
                value={city} onChange={e=>setCity(e.target.value)}>

                {filteredCities.map(c=><option key={c.id} value={c.name} > {c.name} </option>)}
            </select>
            {city &&
                <h2>Selected City : {city}</h2>
            }
            
        </div>
    )



}

export default City;