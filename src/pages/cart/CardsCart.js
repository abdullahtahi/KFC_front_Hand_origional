import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addCartReducer } from '../../Redux/reducer/addCartReducer'
import { store } from '../../Redux/store/store'

export default function CardsCart(props) {
   const  cart=props.cart

//    console.log("the count is",count)

   const dispatch = useDispatch()
const handlecartremove=(id)=>{
dispatch({
    type:"REMOVE_CART",
    payload:id
})
localStorage.setItem("cartitems",store.getState().addCartReducer.addcart)
}

const counter=useSelector((abc)=>abc.counterreducer) 
const addvalue=()=>{
    dispatch ({
        type:"INCREMENT",
        
    })
}
const subtractvalues=()=>{
    if(counter<=1)
{
return counter

    }
else
{
    dispatch({
        type:"DECREMENT"
    })
}
} 
   return (
        <div className="col-md-12">
        <div class="card mb-3">
        <div class="row g-0">
        <div class="col-md-4">
        <img src={cart.image} class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">{cart.title}</h5>
        <p class="card-text">{cart.description}</p>
        <button className="btn btn-outline-danger" onClick={subtractvalues}>-</button>
            <button className="btn btn-outline-danger">{counter}</button>
            <button className="btn btn-outline-danger" onClick={addvalue}>+</button>
            <button className="btn btn-outline-warning" onClick={()=>handlecartremove(cart.id)}><i class="bi bi-trash-fill"></i></button>
            <button style={{marginLeft:"60px"}} className="btn btn-outline-danger" onClick={addvalue}>PKR:{cart.price*counter}</button>  
        </div>
        </div>
      
        </div>
        </div>
        </div>
    )
}
