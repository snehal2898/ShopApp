import { Link } from "react-router-dom";
import mobiles from "../../../database/mobile_data";
import MobileCard from "./MobileCard";

const MobileList = ()=>{

    const mobileCardList = mobiles.map( mbl=> <Link to={"detail/"+mbl.id} key={mbl.id} > <MobileCard mobile={mbl}/> </Link>  )


    return (
        <div>
            {mobileCardList}
        </div>
    )



}

export default MobileList;