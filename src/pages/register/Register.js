import React,{useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../register/Register.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
const [image,setimage]=useState()
const notify = () => toast("Wow so easy!");
    const formik = useFormik({
        initialValues:{
fullname:"",
username:'',
email:'',
password:'',
image:""
        },
        validationSchema:Yup.object({
fullname:Yup.string()
.required("this field is required"),
username:Yup.string()
.min(5,"minimum 5 character is required")
.max(15,"maximum 15 character is required")
.required("username is required"),
email:Yup.string()
.email("this email is invalid").required("email is required"),
password:Yup.string()
.min(8,"password should be 8 minimum")
.max(15,"password should be 15 maximum")
.required("password is required"),
image:Yup.string().required("required"),
}),
onSubmit: async values=>{
    // alert(JSON.stringify(values, null, 2));
    try{
    const config={
        headers:{"Content-type":'application/json'
    
    }
    }
     await axios.post("http://localhost:9000/api/user/new",values,config)
    
}catch(error)
{
    console.log(error.response)
}


}
    });
    return (
    <div>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <h3>USER ACCOUNT</h3>
            <h3>fullname</h3>
            <input type="text" name="fullname" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullname}
            className=" mb-4" placeholder="Enter a fullname"/>
            {formik.touched.fullname && formik.errors.fullname ? (<div className="errors">{formik.errors.fullname}</div>):null }
            <h3>username</h3>
                <input type="text" name="username" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="mb-4"  placeholder="Enter a username"/>
                {formik.touched.username && formik.errors.username?(<div className="errors">{formik.errors.username}</div>):null}
                <h3>Email</h3>

                <input type="email"  name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className=" mb-4" placeholder="Enter a Email"/>
                {formik.touched.email && formik.errors.email ?(<div className="errors">{formik.errors.email}</div>):null}
                <h3>password</h3>
                <input type="password" name="password" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                 className="mb-4" placeholder="Enter a Password"/>
                 {formik.touched.password && formik.errors.password?(<div className="errors" >{formik.errors.password}</div>):null}
                
                  <h3>image</h3>
                  <input type="file" id="image" name="image" accept='image/*'
                  className="form-control"
                 onChange={event=>{
                     const  reader=new FileReader()
                     reader.readAsDataURL(event.target.files[0]) 
                    reader.onload=()=>{
                        if(reader.readyState===2)
                        {
                            setimage(reader.result)
                       formik.setFieldValue("image",reader.result)
                        }
                    }
                       //  console.log(event.target.files[0])
                 }}
                 onBlur={formik.handleBlur}   
                 />
    {formik.touched.image && formik.errors.image?(<div className="errors" >{formik.errors.image}</div>):null}

                  <img style={{width:'150px',height:"150px", borderRadius:'50%',color:"red"}}src={image} alt="image"/> 
                 <button type="submit" class="btn btn-primary sub_btns" onClick={notify}>Create </button>
                 <ToastContainer />
                 
                {/*  
//                 <div className="input-wrap">
//                 <input type="text" className="input" 
//                 required/> 
//                            <label>
//                                yourName
//                            </label>
//                            </div> 
//  */}

        


            </form>
             </div>
                    
    );
};