import './App.css';
import React,{useState,useEffect} from'react'
import Header from"./component/header/Header"
import Home from '../src/pages/home/Home'
import Login from "../src/pages/login/Login"
import Register from "../src/pages/register/Register"
import Notfound from '../src/pages/notfound/Notfound';
import Detailpage from './pages/detailpage/Detailpage'
import Product from '../src/pages/product/Product'
import Api from "../src/component/API/Api"
import Todo from './pages/todo/Todo'
import {useDispatch} from "react-redux"
import {Elements} from "@stripe/react-stripe-js"
import Payment from './pages/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Cart from './pages/cart/Cart';
import Footer from './component/footer/Footer';
import Edit from './pages/edit/Edit';
import axios from 'axios'
import Create from './pages/create/Create';
import PersonalInfo from './pages/Personalinfo/PersonalInfo';
import RouteProtection from './pages/RouteProtection/RouteProtection';
const stripeApikey=loadStripe('pk_test_51JuY0GK9PX3nahT8KtriFGwRsNkAwMnhRftDVLe2Cm553gGjJjerPsFKHecpvh3Y5aHqDT2X1GH7jaaLE8IWbmu400yu4HJM0X');
  function App() {
  const dispatch = useDispatch()
useEffect(async()=>{
  try{
    dispatch({
      type:"ONLOAD_REQUEST"
    })
      
   const config={
    
      headers:{"Content-type":'application/json'     }
   }

  //   const {data}=await axios.get("http://localhost:9000/api/me",config)
  //  console.log("the app data is",data)
  const {data}=await axios("/api/me")
// console.log("the app data is",data)
    dispatch({
      type:"ONLOAD_SUCCESS",
      payload:data.user
    })
    
  }catch(error)
  {
    // console.log(error.response)
  }
},[])
    return (
    <div className="container">
    <Router>
    <Header />
       <Switch>
           <Route exact path="/account/Login">
           <Login/>
           </Route>
           <Route exact path="/account/register">
           <Register/>
           </Route>
           <Route exact path="/">
           <Home /> 
           </Route>
           <Route exact path="/product/:id">
            <Detailpage/>            
            </Route>
            <Route  exact path="/collection/:col">
          <Product/>
        </Route>
        <Route  exact path="/edit/:id">
          <Edit/>
        </Route>
        <Route  exact path="/create">
          <Create/>
        </Route>
        <Route exact path="/todo">
        <Todo/>
           </Route>
       <Route exact path="/cart">
        <Cart/>
           </Route>
           <Route exact path="/proceedtopayment">
       <RouteProtection Component={PersonalInfo}/>
       
           </Route>
           
           <Route exact path="/payment">
           <Elements stripe={stripeApikey}>
        <RouteProtection Component={Payment}/>
        </Elements>
           </Route>

         <Route exact path="*">
           <Notfound/>
           </Route>
           
       </Switch>
<Footer/>
   </Router>
      
      
    </div>
);
}

export default App;
