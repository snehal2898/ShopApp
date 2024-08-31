import { useState,createContext } from "react";
import countries from "../../database/country_data";
import State from "./State";

//globally create and export Context object
export const CountryContext = createContext()


const Country = ()=>{

    const [countryId,setCountryId] = useState(0)

    const handleCountryChange = (e)=>{
        setCountryId(e.target.value)
    }

    return(
        <div className="container w-25">
            <label className="form-label">Select Country</label>
            <select className="form-select" value={countryId} onChange={handleCountryChange} >
                {countries.map(coun=>
                    <option key={coun.id} value={coun.id}> 
                        {coun.name} 
                    </option>  )}
            </select>

            { countryId!=0 &&
                <CountryContext.Provider value={countryId} >
                <State/>
            </CountryContext.Provider>

            }
                
            
        </div>
    )

}

export default Country;