import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
// import card1 from '../../assert/card1.png'
import "../detailpage/Detailpage.css"
import axios  from 'axios'
import { useSelector,useDispatch } from 'react-redux';
import {store} from "../../Redux/store/store"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Detailpage() {
    let { id} = useParams();
    const dispatch = useDispatch()
  
    // const S=products.filter((ploop)=>ploop.slug===slug)
// console.log(S);
// console.log(p);
const notify = () => toast("Wow so easy!");

const [detail, setdetail] = useState([])
const [loading, setloading] = useState(false)    
const [overlay, setoverlay] = useState(false)   

const [disable, setDisable] =useState(false);

let counter=useSelector((abc)=>abc.counterreducer) 









    // const subtractvalues=()=>{
//     if(counter<=1)
// {
// return counter

//     }
// else
// {
//     dispatch({
//         type:"DECREMENT"
//     })
// }
// } 
const [product,setproduct]=useState({})
console.log(product)
const pro_data=async () =>{

try{
    const data=await axios.get(`http://localhost:9000/api/product/${id}`).then((response)=>{setproduct((response.data.product))
    // console.log("the edit data is",response.data.product)
})
}catch(error)
{
    console.log(error.response)
}
}

// const addcart= useSelector(state => state.addCartReducer.addcart)

const handleAddCart=async()=>
{    
        dispatch({
    type:"ADD_TO_CART",
    payload:{
        id:product._id,
        title:product.title,
        image:product.image,
        description:product.description,
        price:product.price,
        stock:product.stock,
       counter:product.counter
    }
    
})
localStorage.setItem('cartitems',JSON.stringify(store.getState().addCartReducer.addcart))

}

useEffect(() => {
    pro_data();
    }, [])

return (
    loading ?<h1>Loading</h1>:<div className="main">
            <div>
         <img src={product.image}alt=""/>   
         </div>
    <div className="ms-4">
        <h1>{product.title}</h1>
             <p>Description:{product.description}</p>
            <h1>price:{product.price*counter}  pkr</h1>
            <h1>stock:{product.stock}</h1>
             <button className="btn btn-outline-danger" >-</button>
            <button className="btn btn-outline-danger">{counter}</button> 
            <button className="btn btn-outline-danger" >+</button>
           
             <button disabled={disable}className=" ms-5 btn btn-danger"  onClick={notify} onClick={()=>{handleAddCart();setDisable(true)}}>ADD TO BUCKET</button>
            <button onClick={notify}>notify</button>
           <ToastContainer />
            </div>

{
overlay ?< div className="overlay" onClick={()=>setoverlay(false)}> :" "    
  <div className="sidebar_wrapper">
      <div className="sidebar_head">
          <div className="sidebar_item1">
          <h4> your bucket</h4>
      </div>
<div className="sidebar_item2"> <h3> 1</h3>
  </div>
  <div className="sidebar_items3">
   <h3 className=""> pkr</h3>
  </div>
      </div>
      <div>
          
      </div>
   </div>
</div>:" "
 }
{/* <li>{counter}</li> */}
        </div>
    )
}
