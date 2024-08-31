import { Link } from "react-router-dom";
import wardrobes from "../../../database/furniture/wardrobe_data";
import WardrobeCard from "./WardrobeCard";


const WardrobeList = ()=>{

    const wardrobeCardList = wardrobes.map(wardrobeVar=> <Link to={"detail/"+wardrobeVar.id} key={wardrobeVar.id} > 
                            <WardrobeCard wardrobe={wardrobeVar}/> 
                </Link> )

    return (
        <div className="container mt-5">
            {wardrobeCardList}
        </div>
    )
}

export default WardrobeList;