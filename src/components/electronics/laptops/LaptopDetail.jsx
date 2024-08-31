import {useParams,useNavigate} from 'react-router-dom'
import laptops from '../../../database/laptop_data'

const LaptopDetail = ()=>{

    const {mid} = useParams()
    const navigate = useNavigate()

    const laptopObj = laptops.find(lap=>lap.id==mid)

    const handleClick = ()=>{
        navigate("/electronics/laptop")
    }

   return(
        <div className='container'>
            <h2 className='text-success fs-1'> {laptopObj.brand} {laptopObj.model} </h2>
            <img src={laptopObj.image} alt={laptopObj.model} />
            <h4 className='text-danger'> Price : &#8377; {laptopObj.price} </h4>
            <table className='table table-striped table-danger'  >
                <thead>
                    <tr>
                        <th>Specification Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Screen Size</th>
                        <td> {laptopObj.specification.screenSize} </td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <td> {laptopObj.specification.color} </td>
                    </tr>
                    <tr>
                        <th>Hard Disk Size</th>
                        <td> {laptopObj.specification.storage.hardDiskSize} </td>
                    </tr>
                    <tr>
                        <th>RAM</th>
                        <td> {laptopObj.specification.storage.ramMemory} </td>
                    </tr>
                    <tr>
                        <th>Operating System</th>
                        <td> {laptopObj.specification.operatingSystem} </td>
                    </tr>
                    <tr>
                        <th>CPU Model</th>
                        <td> {laptopObj.specification.cPUModel} </td>
                    </tr>
                    <tr>
                        <th>Graphics Card</th>
                        <td> {laptopObj.specification.graphicsCard} </td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-warning m-1' onClick={handleClick}>Back to List</button>

        </div>

   )
    
}

export default LaptopDetail;



