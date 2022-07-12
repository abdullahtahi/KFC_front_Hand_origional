import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import {useDispatch,useSelector} from "react-redux";
export default function Edit() {
    let {id}=useParams();
    const [edit,setedit]=useState({})
    const edithandler= async(id)=>{
    // await fetch(`http://localhost:3000/product/${id}`)
    // .then((response)=>response.json())
    // .then((data)=>{
    //     setedit(data)

const data=await axios.get(`http://localhost:9000/api/product/${id}`).then((response)=>{setedit(response.data.product)
// console.log("the edit data is",response.data.product)
})
    }
  useEffect(async() => {
    edithandler(id);
  },[id])
const updateinfo=async()=>{
        // await fetch(`http://localhost:3000/product/${id}`,{
        //     method:"PUT",
        //     headers:{'Content-type':'application/json'},
        //     body:JSON.stringify(edit)
        // })
        // .then((response)=>response.json())
        // .then((data)=>{
        //     console.log("updated product")
        //     console.log(data)
try{
    const data=await axios.put(`http://localhost:9000/api/product/update/${id}`,edit)
    // console.log("the update da   ta is",edit)
}catch(error){
    console.log("the error response",error.response)
}}
            return (
        <div className="w-25">
            <h4>Update the products</h4>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product title" onChange={(e)=>setedit({...edit,title:e.target.value})} value={edit.title}/>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product slug" onChange={(e)=>setedit({...edit,slug:e.target.value})} value={edit.slug}/>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product description" onChange={(e)=>setedit({...edit,description:e.target.value})} value={edit.description}/>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product price" onChange={(e)=>setedit({...edit,price:e.target.value})} value={edit.price}/>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product stock"  onChange={(e)=>setedit({...edit,stock:e.target.value})} value={edit.stock}/>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product category"  onChange={(e)=>setedit({...edit,category:e.target.value})} value={edit.category}/>
            <input  type='button'class="btn btn-success" onClick={updateinfo}value="Update" />
    
    </div>
    )
}
