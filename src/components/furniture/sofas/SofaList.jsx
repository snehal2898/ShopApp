import {Link} from 'react-router-dom'
import sofas from "../../../database/furniture/sofa_data";
import SofaCard from './SofaCard';


const SofaList = ()=>{

    const sofaCardList = sofas.map(sofaVar=> <Link to={"detail/"+sofaVar.id} key={sofaVar.id} > <SofaCard sofa={sofaVar}/> </Link> )

    return (
        <div className="container mt-5">
            {sofaCardList}
        </div>
    )
}

export default SofaList;