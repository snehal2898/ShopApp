const WardrobeCard = ({wardrobe})=>{

    return(
        <div className="card d-inline-block m-1" style={{width:'15rem',height:'18rem',backgroundColor:'lightskyblue'}}>
            <img className="card-img-top" src={wardrobe.image} alt={wardrobe.brand} style={{height:'10rem'}} />
            <div className="card-body mt-3">
                <h3 className="card-title">{wardrobe.brand}  </h3>
                <h5 className="card-subtitle">&#8377; {wardrobe.price} </h5>
                <h6 className="card-subtitle"> {wardrobe.color} </h6>

            </div>

        </div>
    )

}

export default WardrobeCard;