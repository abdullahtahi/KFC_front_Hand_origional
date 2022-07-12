import "../header/Header.css"
import React ,{useState,useEffect} from'react'
import kfclogo from'../../assert/kfclogo.png'
import axios from 'axios'
import {useHistory} from "react-router-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
function Header(){
  // const [catagorys, setcatagorys] = useState([])
  const [loading, setloading] = useState(false)    
  const {history}=useHistory()
  const {category}=useSelector((state)=>state.categoryReducer)
  // console.log("the category data is ",category)
  const counter=useSelector((state)=>state.counterreducer)
  // const pro_data=async () =>{
  //     setloading(true)
  //     await fetch(" http://localhost:3000/catagorys")
  //     .then((response)=>response.json())
  //     .then((data)=>{
  //     setloading(false)
  //     setcatagorys(data)})
  // }
const dispatch = useDispatch()  
  useEffect(async() => {
  //pro_data();
dispatch({
  type:'CATEGORY_REQUEST'
})
const {data}=await axios.get("http://localhost:9000/category/all")
dispatch({
  type:'CATEGORY_SUCCESS',
  payload:data
}) }, [])
const {addcart} = useSelector(state => state.addCartReducer)
const total=addcart.reduce((acc,val)=>acc+val.price*counter,0)
const {isAuthticated} = useSelector(state => state.loginUser)
// console.log("the state data is ",state)

const handleLogout=async()=>{try{
  dispatch({
    type:"LOGOUT_REQUEST"
  })

const {data}=await axios.get("/api/user/logout")
console.log("the logout person is",)
dispatch({
  type:"LOGOUT_SUCCESS",
  payload:data.message
})

}catch(error)
{
  console.log(error)
}

}





return (
        <div className="header-wrapper" >
        
            <div className="header-inner">
    <div className="item">
   <Link to="/"><img src={kfclogo}alt=""/></Link>
    
    </div>
    <div className="item">
<ul>
    <li><Link to="/account/register">setlocation</Link></li>
    {/* <li><Link to="/account/register">Register/signup</Link></li> */}
    {isAuthticated?<button className="btn btn-success w-35" onClick={handleLogout}>Logout</button>:<li><Link to="/account/Login">Register/signin</Link></li>}
</ul>
</div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
        < Link to='/collection/everyday-value' class="nav-link active">EVERYDAY VALUE</Link>
        </li>
        <li class="nav-item">
          <Link  to='/collection/make-it-meal' class="nav-link">MAKE IT A MEAL</Link>
        </li>
        <li class="nav-item">
          <Link  to='/collection/Signature-boxes' class="nav-link">SIGNATURE BOXES </Link>
        </li>
        <li class="nav-item">
          <Link  to="/collection/Sharing"class="nav-link">SHARING</Link>
        </li>
        <li class="nav-item">
          <Link  to='/collection/promotions' class="nav-link">PROMOTIONS</Link>
        </li>
        <li class="nav-item">
          <Link  to='/collection/Snackes'class="nav-link">SNACKES</Link>
        </li>
        <li class="nav-item">
          <Link  to='/collection/mid-night-deals' class="nav-link">MID NIGHT DEALS</Link>
        </li> */}
       {  
        
       loading ?<h1>Loading</h1>:
      
       category.map((loop)=>< Link to={`/collection/${loop.category}`} class="nav-link ">{loop.category}</Link>)
}
       
         
        </ul>
         <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/create">new Product</Link>
          <Link class="nav-link active" aria-current="page" to="/todo">todo</Link>
        
        </li>
        <Link to="/cart" class="nav-item"><i class="bi bi-cart-check-fill"></i>item:{addcart.length}-PKR:{total}</Link>
        </ul>
     
    </div>
  </div>
</nav>

        </div>
        )}
export default Header
