const SofaCard = ({sofa})=>{

    return(
        <div className="card d-inline-block m-1" style={{width:'15rem',height:'20rem',backgroundColor:'lightskyblue'}}>
            <img className="card-img-top" src={sofa.image} alt={sofa.brand}  style={{height:'10rem'}}/>
            <div className="card-body mt-3">
                <h3 className="card-title">{sofa.brand}  </h3>
                <h5 className="card-subtitle">&#8377; {sofa.price} </h5>
                <h6> {sofa.shape} </h6>
            </div>
        </div>
    )

}

export default SofaCard;