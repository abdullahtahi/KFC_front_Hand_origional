import React,{useState,useEffect} from 'react'
import Slider from'../../component/slider/Slider'
import Card from '../../component/card/Card' 
import axios from 'axios';
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import '../home/Home.css'
import {useDispatch,useSelector} from "react-redux"
export default function Home() {
    const [product, setproduct] = useState([])
const [loading, setloading] = useState(false)    
const {products}=useSelector(state => state.productReducer)

console.log(products)
// const pro_data=async () =>{
//     setloading(true)
//     await fetch(" http://localhost:3000/product")
//     .then((response)=>response.json())
//     .then((data)=>{
//     setloading(false)
//     setproduct(data)})
// }

const dispatch = useDispatch()
useEffect(async()  => {
try{
    dispatch({type:"ALLPRODUCT_REQUEST"})
    const {data}=await axios.get( "http://localhost:9000/api/products")
    console.log(data)
   
dispatch({
    type:'ALLPRODUCT_SUCCESS',
    payload:data
})
}
catch(error){
    console.log(error.response)
}

    // pro_data();
    }, [])
    return (
        <div>
            <Slider/>
           
           <div className="row ">
           <div style={{paddingTop:"30px",paddingBottom:"30px"}}></div>
    {
       loading ?<h1>Loading......</h1>: products.map((p_loop,Ind)=><Card className="card" key={Ind} pro={p_loop} />)
        }
        </div> 
           
        </div>
    )
}
