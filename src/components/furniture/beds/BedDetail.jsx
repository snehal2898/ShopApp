import {useParams,useNavigate} from 'react-router-dom'
import beds from '../../../database/furniture/bed_data';

const BedDetail = ()=>{

    const {bid} = useParams()
    const navigate = useNavigate()

    const bedObj = beds.find(bedVar=>bedVar.id==bid)


    const handleClick = ()=>{
        navigate("/furniture/bed")

    }

    return(
        <div className='container'>
            <h2 className='text-success fs-1'> {bedObj.bedType} </h2>
            <img src={bedObj.image} alt={bedObj.bedType} style={{width:'20rem',height:'18rem'}} />
            <h4 className='text-danger'> Price : &#8377; {bedObj.price} </h4>
            <table className='table table-striped table-info'>
                <thead>
                    <tr>
                        <th>Specification Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Length of the Bed (in Inches)</th>
                        <td> {bedObj.lengthInches} </td>
                    </tr>
                    <tr>
                        <th>Width of the Bed (in Inches)</th>
                        <td> {bedObj.widthInches} </td>
                    </tr>
                    <tr>
                        <th>Finish Type</th>
                        <td> {bedObj.finishType} </td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <td> {bedObj.color} </td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-warning m-1' onClick={handleClick} >Back to List</button>
        </div>
    )



}

export default BedDetail;

    
