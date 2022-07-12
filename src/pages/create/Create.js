import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import {useDispatch,useSelector} from "react-redux"
export default function Edit() {
    let {id}=useParams();
    const [edit, setedit] = useState({})
    const createinfo=async()=>{
        // await fetch(`http://localhost:3000/product/`,{
        //     method:"POST",
        //     headers:{'Content-type':'application/json'},
        //     body:JSON.stringify(edit)
        // })
        // .then((response)=>response.json())
        // .then((data)=>{
        //     console.log("updated product")
        //     console.log(data)
try{
    
 const data=await axios.post(`http://localhost:9000/api/product/new`,edit) 
 console.log("the created component is",edit)
}catch(error)
{
    console.log(error.response)
}  
}
            return (
        <div className="w-25">
            <h4>Create the products</h4>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product title" onChange={(e)=>setedit({...edit,title:e.target.value})} value={edit.title}/>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product slug" onChange={(e)=>setedit({...edit,slug:e.target.value})} value={edit.slug}/>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product description" onChange={(e)=>setedit({...edit,description:e.target.value})} value={edit.description}/>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product price" onChange={(e)=>setedit({...edit,price:e.target.value})} value={edit.price}/>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product stock"  onChange={(e)=>setedit({...edit,stock:e.target.value})} value={edit.stock}/>
            <input class="form-control form-control-lg mb-4" type="text" placeholder="product category"  onChange={(e)=>setedit({...edit,category:e.target.value})} value={edit.category}/>

            <input  type='button'class="btn btn-success" onClick={createinfo}value="Ceate" />
    
    </div>
    )
}
