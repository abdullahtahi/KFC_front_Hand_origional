import React,{useState,useEffect} from 'react'
import '../product/Product.css'
import Card from '../../component/card/Card'
import { useParams } from 'react-router'
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
export default function Product() {
    // const [products, setproduct] = useState([])
    const [loading, setloading] = useState(false)    
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.productReducer)
    const pro_data=async () =>{
    //     setloading(true)
    //     await fetch(" http://localhost:3000/product")
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //     setloading(false)
    //     setproduct(data)
    //     })
    dispatch({
        type:'ALLPRODUCT_REQUEST'})
        const {data}=await axios("http://localhost:9000/api/products")
        dispatch({
        type:'ALLPRODUCT_SUCCESS',
        payload:data})
    
    }
    
    useEffect(async() => {
       await pro_data()
        }, [])
    
        let {col} = useParams();

const pro=products.filter((loop)=>loop.category===col)

return (

<div className="row">
                <h1 className="head">{col}</h1>
       {
           

loading ?<h1>Loading</h1>:pro.map((loops,i)=><Card className="card " key={i} pro={loops}  abd={pro_data}/>)
       }
                    </div>
)
}
