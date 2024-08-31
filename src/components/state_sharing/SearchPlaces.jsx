const SearchPlaces = ({searchValue,onSearch})=>{

    return (
        <div className="m-2">
            <input value={searchValue} onChange={onSearch} />
        </div>
    )



}

export default SearchPlaces;