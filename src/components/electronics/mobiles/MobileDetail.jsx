import {useParams,useNavigate} from 'react-router-dom' 
import mobiles from '../../../database/mobile_data';
import { useContext } from 'react';
import { ShopContext } from '../../../App'; 

{/* useParams is a Hook of react router dom library */}


const MobileDetail = ()=>{

    const {mid} = useParams()
    const navigate = useNavigate()
    {/*navigate is a method */}

    const {addItemToCart} = useContext(ShopContext)

    const mobileObj = mobiles.find(mbl=>mbl.id==mid)

    const handleClick = ()=>{
        navigate("/electronics/mobile")

    }

    return(
        <div className='container'>
            <h2 className='text-success fs-1'> {mobileObj.brand} {mobileObj.model} </h2>
            <img src={mobileObj.image} alt={mobileObj.model} />
            <h4 className='text-danger'> Price : &#8377; {mobileObj.price} </h4>
            <table className='table table-striped table-info'>
                <thead>
                    <tr>
                        <th>Specification Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Primary Camera</th>
                        <td> {mobileObj.specification.camera.primary} </td>
                    </tr>
                    <tr>
                        <th>Front Camera</th>
                        <td> {mobileObj.specification.camera.front} </td>
                    </tr>
                    <tr>
                        <th>Internal Storage</th>
                        <td> {mobileObj.specification.internalStorage} </td>
                    </tr>
                    <tr>
                        <th>RAM</th>
                        <td> {mobileObj.specification.ram} </td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-outline-primary m-1' onClick={()=>addItemToCart(mobileObj)} >Add to Cart</button>
            <button className='btn btn-warning m-1' onClick={handleClick} >Back to List</button>
        </div>
    )



}

export default MobileDetail;