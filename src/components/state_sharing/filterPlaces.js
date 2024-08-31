// javascript function which filters places as per search query 
// contains the logic to filter the places
export default function filterPlaces(places,searchQuery){

    searchQuery = searchQuery.toLowerCase()

    const searchResult = places.filter(p=>p.name.toLowerCase().startsWith(searchQuery))

    return searchResult

}

