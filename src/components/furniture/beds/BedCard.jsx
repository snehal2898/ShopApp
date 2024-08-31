const BedCard = ({bed})=>{

    return(
        <div className="card d-inline-block m-1" style={{width:'15rem',height:'18rem',backgroundColor:'lightskyblue'}}>
            <img className="card-img-top" src={bed.image} alt={bed.bedType} style={{height:'10rem'}} />
            <div className="card-body mt-3">
                <h3 className="card-title"> {bed.bedType} </h3>
                <h5 className="card-subtitle"> &#8377; {bed.price} </h5>
            </div>
        </div>
    )

}

export default BedCard;