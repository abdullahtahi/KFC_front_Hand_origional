import React,{useState} from 'react'
// import card1 from '../../assert/card1.png'
import '../card/Card.css'
import { Link } from 'react-router-dom'
// import Data from "../../Data"
import {useDispatch,useSelector} from "react-redux"
import axios from 'axios'
export default function Card(props) {
const [product, setproduct] = useState(props.pro)
// console.log("the data is",props.abd)
const clickhandler= async (id)=>{

  //   await fetch(`http://localhost:3000/product/${id}`,{
//     method:'DELETE'
//   })
//   .then((response)=>response.json())
//   .then((data)=>{
//     props.abd();
// })}
try{
  const data=await axios.delete(`http://localhost:9000/api/product/delete/${id}`).then((response)=>{
    console.log("the reposnse is ",response.data)
  
  })
  props.abd();

}catch(error)
{
  console.log(error.response)
}
}
return (

<div className="col-md-4 cards-1"  className="col-lg-4 d-flex align-items-stretch">
            <div className="card"  >
  <img src={product.image} className="card-img-top" alt="..."/>
  <div className="card-body bdy">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <Link to={`/product/${product._id}`} className=" form-control ms-3 mb-3 btn btn-primary ">Go somewhere</Link>
    <button className=" form-control btn btn-danger ms-3 mb-3" onClick={()=>clickhandler(product._id)}>Delete</button>
    <Link to ={`/edit/${product._id}`} className=" form-control mb-3 btn btn-warning ms-3">Edit</Link>

    
 
  </div>
</div>
        </div>
    )
}
