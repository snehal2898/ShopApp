import { useEffect, useState } from "react";

const ProductList = ()=>{

    const [products,setProducts] = useState([])

    // Backend Data URL
    // const SERVER_URL = "http://hostname:port/serverResourcePath"
    const PRODUCT_API_URL = "/data/products.json"

    function getProducts(){
        // Wrapper around AJAX
        // Asynchronous fetch API to access data from backend
        fetch(PRODUCT_API_URL,{
            // request configuration
            method :"GET",   // default HTTP method used by fetch API in React
            // configure request headers
            headers:{
                'Accept':'application/json'    //MIME type (Multi-purpose Internet Mail Extensions)
            }

        })
            .then( response=>{
                if(response.ok)
                    return response.json()
                else if(response.status=="404")
                    return response.json()
                else
                    throw Error(`Error from server ${response.status}`)
            })
            .then(data=>{
                // if response.ok, then get response data
                if(data){
                    console.log(data)
                    setProducts(data)
                }
                
            })
            .catch(error=>console.error(error.message))
    }


    // call useEffect
    useEffect( ()=>{
        // setup function
        getProducts();

    },[products] )


    // rendering logic

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( product=> 
                        <tr key={product.id}>
                            <td> {product.name} </td>
                            <td> {product.brand} </td>
                            <td> {product.price} </td>
                        </tr> 
                    )}
                </tbody>
            </table>
        </div>
    )

}

export default ProductList;