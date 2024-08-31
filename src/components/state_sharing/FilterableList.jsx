import { useState } from "react";
import PlacesList from "./PlacesList";
import SearchPlaces from "./SearchPlaces";
import places from "../../database/places_data";
import filterPlaces from "./filterPlaces";

const FilterableList = ()=>{

    const [searchQuery,setSearchQuery] = useState('')

    const handleSearchQuery = (e)=>{
        setSearchQuery(e.target.value)
    }

                        // calling business logic function
    const searchResult = filterPlaces(places,searchQuery)

    return (
        <div>
            <SearchPlaces searchValue={searchQuery} onSearch={handleSearchQuery} />
            <PlacesList places={searchResult}  />
        </div>
    )

}

export default FilterableList;