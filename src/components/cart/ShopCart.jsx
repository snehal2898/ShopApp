import { useContext } from "react";
import { ShopContext } from "../../App"; 

const ShopCart = ()=>{

    // subscribing child to context
    const {cart,removeItemFromCart} = useContext(ShopContext)

    const totalReducer = ()=>{
        const prices = cart.map(item=>item.price)
        return prices.reduce( (total,price)=>total+price )
    }

    return (
        <div>
            {cart.length==0 ? <h2>Your Cart is Empty</h2> :
                <div>
                    <h2> No. of Items in Cart = {cart.length} </h2>
                    <h2>Cart Total : &#8377; {totalReducer()} </h2>
                    <table className="table table-success ">
                        {cart.map(item=> <tr key={item.id}>
                            <td> {item.model} </td>
                            <td> {item.brand} </td>
                            <td> &#8377; {item.price} </td>
                            <td> <button className="btn btn-close" onClick={()=>removeItemFromCart(item)} ></button> </td>
                        </tr> )}
                    </table>
                </div>
            }
        </div>
    )

}

export default ShopCart;