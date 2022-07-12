import React from 'react'
import CardsCart from './CardsCart'
import { useSelector } from 'react-redux'
import "./cart.css"
import {Link} from "react-router-dom"

export default function Cart() {
    const {addcart} = useSelector(state => state.addCartReducer)
    const total=addcart.reduce((acc,val)=>acc+val.price,0)
    // console.log()
    return (
        
        <div className="row">
        <div className="col-md-9">
            <div class="row">
            {addcart.length===0?<h4>"The cart is empty"</h4>:addcart.map((ploop,counter)=><CardsCart cart={ploop} count={counter}/>)} 
            </div>
            </div>
        <div className="col-md-3">
        <div class="card" >
            <div class="card-body text-center">
 <p class="card-text"><table class="table">
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td><strong>totalPrice</strong></td>
      <td>{total}</td>
    
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Tax</td>
      <td>200</td>
    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Shippment</td>
      <td>200</td>
    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>GrandTotal</td>
      <td>{total+200+200}</td>
    
    </tr>
  </tbody>
</table></p>
 <Link to="/proceedtopayment" class="btn btn-primary text-center">Proceed To Checkout</Link>
</div>
</div>
        </div>
    </div>
    )
}
