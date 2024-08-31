import { Link } from "react-router-dom";
import laptops from "../../../database/laptop_data";
import LaptopCard from "./LaptopCard";

const LaptopList = ()=>{

     const laptopCardList = laptops.map( lap=> <Link to={"detail/"+lap.id} key={lap.id} > <LaptopCard laptop={lap}/>   </Link> )

     

     return (
        <div className="container mt-5">
            {laptopCardList}
        </div>
    )
}

export default LaptopList;