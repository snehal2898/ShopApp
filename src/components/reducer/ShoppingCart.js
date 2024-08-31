import {useReducer} from 'react'
import stationaryProducts from '../../database/product_data';

// global reducer function
// cart parameter is state object passed to cartReducer
const cartReducer = (cart,action)=>{
    switch(action.type){
        case "ADD TO CART":
            return [...cart,action.item]
        case "REMOVE ITEM":
            return cart.filter(item=>item.id!==action.item.id)  
        default:
            return cart;
    }

}  // end of cartReducer function

// global reducer function to calculate cart total amount
// utility function
const totalReducer = (cart)=>{
    const itemPrices = cart.map(item=>item.price)

    const cartTotal = itemPrices.reduce( (total,price)=>total+price )

    return cartTotal;

}


// React Component
const ShoppingCart = ()=>{
    // cart is state initialized with empty array
    // dispatch is in the form setCart
    const [cart,setCart] = useReducer(cartReducer,[])

    // event handlers
    const handleAddToCart = (product)=>{
        // call dispatch function setCart
        setCart({type:"ADD TO CART",item:product})
    }

    const handleRemoveItem = (p)=>{
        // call dispatch function setCart
        setCart({type:"REMOVE ITEM",item:p})
    }

    // rendering logic
    return (
        <div>
            {stationaryProducts.map( product=>
                <div className='card m-2 p-2' style={{width:'15rem'}} key={product.id}>
                    <h2> {product.brand} {product.name} </h2>
                    <h4> &#8377; {product.price} </h4>
                    <button className='btn btn-success' onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                </div> 
            )
            }
            {
                cart.length==0 ?
                    <h2>Your Cart is empty</h2> :
                    <div>
                        <h1>Your Shopping Cart</h1>
                        <h3>No of Items : {cart.length}</h3>
                        <h4>Cart Total : &#8377; {totalReducer(cart)} </h4>
                        <table className='table'>
                            <tbody>
                                {cart.map(item=>
                                    <tr key={item.id} >
                                        <td> {item.name} </td>
                                        <td> {item.brand} </td>
                                        <td> &#8377; {item.price} </td>
                                        <td> <button title='Remove item' className='btn btn-close' onClick={()=>handleRemoveItem(item)}></button> </td>
                                    </tr>
                                )
                                }

                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}

export default ShoppingCart;