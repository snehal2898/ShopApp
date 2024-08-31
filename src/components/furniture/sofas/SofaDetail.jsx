import {useParams,useNavigate} from 'react-router-dom'
import sofas from '../../../database/furniture/sofa_data';

const SofaDetail = ()=>{

    const {sid} = useParams()
    const navigate = useNavigate()

    const sofaObj = sofas.find(sofaVar=>sofaVar.id==sid)  


    const handleClick = ()=>{
        navigate("/furniture/sofa")

    }

    return(
        <div className='container'>
            <h2 className='text-success fs-1'> {sofaObj.brand} </h2>
            <img src={sofaObj.image} alt={sofaObj.brand} style={{width:'20rem',height:'18rem'}} />
            <h4 className='text-danger'> Price : &#8377; {sofaObj.price} </h4>
            <table className='table table-striped table-info'>
                <thead>
                    <tr>
                        <th>Specification Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Product Dimension</th>
                        <td> {sofaObj.sofaDimension} </td>
                    </tr>
                    <tr>
                        <th>Product Type</th>
                        <td> {sofaObj.type} </td>
                    </tr>
                    <tr>
                        <th>Product Color</th>
                        <td> {sofaObj.color} </td>
                    </tr>
                    <tr>
                        <th>Seating Capacity</th>
                        <td> {sofaObj.seatingCapacity} </td>
                    </tr>
                    <tr>
                        <th>Product Style</th>
                        <td> {sofaObj.style} </td>
                    </tr>
                    <tr>
                        <th>Product Shape</th>
                        <td> {sofaObj.shape} </td>
                    </tr>
                    <tr>
                        <th>Frame Material</th>
                        <td> {sofaObj.frameMaterial} </td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-warning m-1' onClick={handleClick} >Back to List</button>
        </div>
    )



}

export default SofaDetail;

    
