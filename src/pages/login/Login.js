import React,{useState,useEffect}from 'react'
import '../login/Login.css'
import Cookies from 'js-cookie'
// import validator from 'validator'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import {Link} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
function Login() {
  const [errors,seterrors]=useState({})
 const dispatch = useDispatch() 
 const {isAuthticated} =useSelector(state=>state.loginUser)
 let history = useHistory();
// Note about the history: In hisytory you addd the route which you add the route in the app.js like home we use ("/") in the route to call the home

useEffect(() => {
  if(isAuthticated)
  {
history.push("/")
  }

}, [isAuthticated,history])

 const formik = useFormik({
        initialValues: {
          email: '',
          password:''
        },
        validationSchema: Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(8,'minimum 8 character').max(15,'maximum is 15 character').required('Required')
        }),
        // validate,
        
        onSubmit: async values => {
     try{
            //   alert(JSON.stringify(values, null, 2));

            const config={
            header:{
                "Content-type":'application/json'
            }
            }
                
            // console.log("the login user",data)
                // alert(JSON.stringify(user, null, 2));
               
      dispatch({
        type:"LOGIN_REQUEST"
      })
      const {data,message}=await axios.post('/api/user/login',values,config)
// console.log(data)
      dispatch({
  type:"LOGIN_SUCCESS",
payload:data.user
})



 }catch(error){
         alert(error.response.data.message)
// seterrors(error.response.data.message)
// console.log("the errorsare",errors)
                  
    }
}
      });
      
      return (
    <div>
      
        <form onSubmit={formik.handleSubmit}>
 <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div className="errors">{formik.errors.email}</div>
       ) : null}
       <label htmlFor="email">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.passowrd}
       />
       {formik.touched.password && formik.errors.password ? (
         <div className="errors" >{formik.errors.password}</div>
       ) : null}
 
<button style={{marginTop:"20px"}} type="submit" className="btn btn-primary w-40">Login</button>
    </form>  
    </div>
)
}





    //     const [email, setemail] = useState('')
//     const [password, setpassword] = useState('')
//     const [emailerror,setemailerror]=useState('')        
//     const [passworderror,setpassworderror]=useState('')        

  
//     const submission=async()=>{
// try{
    
      
//         if(email=="" ||email ==null)
//         {
//             setemailerror("please enter a email")
//         }
//         else
//         {
//             setemailerror("")

//         }

//         let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//         if ( re.test(email) ) {
//          setemailerror('')
//         }
//         else {
//             setemailerror("please enter a valid email")
//         }    
//               if(password=="" ||password==null)
//         {
//             setpassworderror("please enter a email")
//         }
//         else
//         {
//             setpassworderror("")

//         }
//         const config={
//             header:{
//                 "Content-type":'application/json'
//             }
//             }
//                 const user=await axios.post('http://localhost:9000/api/user/login',email,password,config)
// console.log(email,password)
            
// }catch(error)
// {
//     console.log(error.response)
// }
    
//         }




//   return (
//         <div>
//             <div className="login-val">

//                 <h3>Email</h3>
//                 <input type="Email" className=" mb-4" onChange={(arg)=>setemail(arg.target.value)} placeholder="Enter a Email"/>
//                 <p className="error">{emailerror}</p>
//                 <p id="val"></p>
//                 <h3>password</h3>
//                 <input type="password" className="mb-4" onChange={(arg)=>setpassword(arg.target.value)} placeholder="Enter a Password"/>
//                 <p className="error" >{passworderror}</p>
            
//             <input type="button" className="btn btn-outline-success md-4" onClick={()=>submission()} value="login"/>
//                  </div> 
//                  </div>
//     )
// }
export default Login

