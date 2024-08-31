import {useParams,useNavigate} from 'react-router-dom'
import wardrobes from '../../../database/furniture/wardrobe_data';

const WardrobeDetail = ()=>{

    const {wid} = useParams()
    const navigate = useNavigate()

    const wardrobeObj = wardrobes.find(wardrobeVar=>wardrobeVar.id==wid)   


    const handleClick = ()=>{
        navigate("/furniture/wardrobe")

    }

    return(
        <div className='container'>
            <h2 className='text-success fs-1'> {wardrobeObj.brand} </h2>
            <img src={wardrobeObj.image} alt={wardrobeObj.brand} style={{width:'20rem',height:'18rem'}}/>
            <h4 className='text-danger'> Price : &#8377; {wardrobeObj.price} </h4>
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
                        <td> {wardrobeObj.dimension} </td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <td> {wardrobeObj.color} </td>
                    </tr>
                    <tr>
                        <th>Weight Limit</th>
                        <td> {wardrobeObj.weightLimit} </td>
                    </tr>
                    <tr>
                        <th>Style</th>
                        <td> {wardrobeObj.style} </td>
                    </tr>
                    <tr>
                        <th>Number of Doors</th>
                        <td> {wardrobeObj.numberOfDoors} </td>
                    </tr>
                    <tr>
                        <th>Shape</th>
                        <td> {wardrobeObj.shape} </td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-warning m-1' onClick={handleClick} >Back to List</button>
        </div>
    )



}

export default WardrobeDetail;

    
