import React from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {CardNumberElement,CardExpiryElement,CardCvcElement,CardElement,useStripe, useElements} from '@stripe/react-stripe-js';
import axios from "axios"
export default function Payment() {
const stripe=useStripe();
const elements=useElements();
const {addcart}=useSelector(state=>state.addCartReducer)
const total=addcart.reduce((acc,val)=>acc+val.price,0)
const shipmentcharges=200;
const taxcharges=200;
const amount=total+shipmentcharges+taxcharges
const paymentData={
amount:amount
}  
const handleSubmit =async (e)=>{
e.preventDefault();
if(!stripe ||!elements)
{return;
}
const config={
  header:{
    "Content-type":"application/json"
  }
}
const data=await axios.post("/api/v1/payment/process",paymentData,config)
console.log("the data of the payment is "+data)
const client_secret=data.client_secret

  }
  
    
    return (
        <div>
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="pills-stripe-tab" data-bs-toggle="pill" href="#pills-stripe" role="tab" aria-controls="pills-stripe" aria-selected="true">stripe</a>
  </li>
  <li class="nav-item"  role="presentation">
    <a class="nav-link" id="pills-jazzcash-tab" data-bs-toggle="pill" href="#pills-jazzcash" role="tab" aria-controls="pills-jazzcash" aria-selected="false">Jazz cash</a>
  </li>
  <li class="nav-item"  role="presentation">
    <a class="nav-link" id="pills-cod-tab" data-bs-toggle="pill" href="#pills-cod" role="tab" aria-controls="pills-cod" aria-selected="false">COD</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-stripe" role="tabpanel" aria-labelledby="pills-stripe-tab">
  <form onSubmit={handleSubmit}>
  <div className="row-mb-3">
    <label for="card-number" className="row-sm-2 col-form-label">Card Number</label>
<div className="col-sm-10">
  <CardNumberElement
  type="text"
  className="form-control w-25"
  id="card-number"/>


</div>

  </div>
  <div className="row-mb-3">
    <label for="card-number" className="row-sm-2 col-form-label">Valid through</label>
<div className="col-sm-10">
  <CardExpiryElement
  type="text"
  className="form-control w-25"
  id="card-expiry"/>


</div>
</div>
<div className="row-mb-3">
    <label for="card-number" className="row-sm-2 col-form-label">Cvc</label>
<div className="col-sm-10">
  <CardCvcElement
  type="text"
  className="form-control w-25"
  id="card-cvc"/>


</div>
</div>

<button className="btn btn-primary">PayNow</button>
</form> 

  </div>
  <div class="tab-pane fade" id="pills-jazzcash" role="tabpanel" aria-labelledby="pills-jazzcash-tab">...</div>
  <div class="tab-pane fade" id="pills-cod" role="tabpanel" aria-labelledby="pills-cod-tab">...</div>
</div>


    

        </div>
    )
}
