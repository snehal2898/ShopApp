const PlacesList = ({places})=>{

    const placeItemList = places.map(p=> <li key={p.id}> {p.name} </li> )


    return (
        <div>
            <ul>
                {placeItemList}
            </ul>
        </div>
    )



}

export default PlacesList;