const MobileCard = ({mobile})=>{

    return(
        <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" src={mobile.image} alt={mobile.model}  />
            <div className="card-body">
                <h3 className="card-title">{mobile.brand} {mobile.model} </h3>
                <h5 className="card-subtitle">&#8377; {mobile.price} </h5>
            </div>
        </div>
    )

}

export default MobileCard;