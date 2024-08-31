const LaptopCard = ({laptop})=>{

    return (
        
            <div className="card d-inline-block m-1" style={{width:'15rem',height:'18rem',backgroundColor:'lightskyblue'}}>
            <img className="card-img-top" src={laptop.image} alt={laptop.model} style={{height:'10rem'}} />
            <div className="card-body">
                <h3 className="card-title"> {laptop.brand} </h3>
                <h4 className="card-title"> {laptop.model} </h4>
                <h5 className="card-subtitle text-danger">&#8377; {laptop.price}  </h5>
            </div>
        </div>

    )
}

export default LaptopCard;

