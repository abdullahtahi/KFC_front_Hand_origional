import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./PersonalInfo.css"
import {useHistory} from "react-router-dom"
export default function Personalinfo() {
        const history=useHistory()

          const formik = useFormik({
            initialValues: {
              FullName: '',
              Address: '',
              email: '',
              City:"",
              Zip:"",
              State:"",

            },
            validationSchema: Yup.object({
              FullName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              Address: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
          
          
            }),
            onSubmit: values => {
            //   alert(JSON.stringify(values, null, 2));
              localStorage.setItem('ShippingKey',JSON.stringify(values))
              history.push("/payment")
            },
          });
          return (
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="FullName">Full Name</label>
              <input
                id="FullName"
                name="FullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.FullName}
              />
              {formik.touched.FullName && formik.errors.FullName ? (
                <div className="error">{formik.errors.FullName}</div>
              ) : null}
        
              <label htmlFor="Address">Address</label>
              <input
                id="Address"
                name="Address"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Address}
              />
              {formik.touched.Address && formik.errors.Address ? (
                <div className="error">{formik.errors.Address}</div>
              ) : null}
        
        <label htmlFor="City">City</label>
              <input
                id="City"
                name="City"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.City}
              />
              {formik.touched.City && formik.errors.City ? (
                <div className="error" >{formik.errors.City}</div>
              ) : null}
              <label htmlFor="Zip">Zip</label>
              <input
                id="Zip"
                name="Zip"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Zip}
              />
              {formik.touched.Zip && formik.errors.Zip ? (
                <div className="error">{formik.errors.Zip}</div>
              ) : null}
              <label htmlFor="State">State</label>
              <input
                id="State"
                name="State"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.State}
              />
              {formik.touched.State && formik.errors.State ? (
                <div className="error">{formik.errors.State}</div>
              ) : null}
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
                <div className="error">{formik.errors.email}</div>
              ) : null}
        
              <button type="submit" className="w-50 btn btn-success">Submit</button>
            </form>
    )
}
