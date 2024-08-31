import {Link} from 'react-router-dom'
import beds from "../../../database/furniture/bed_data";
import BedCard from './BedCard';

const BedList = ()=>{

    const bedCardList = beds.map(bedVar=>  <Link to={"detail/"+bedVar.id} key={bedVar.id} > <BedCard bed={bedVar}/> </Link> )

    return (
        <div className="container mt-5">
            {bedCardList}
        </div>
    )
}

export default BedList;