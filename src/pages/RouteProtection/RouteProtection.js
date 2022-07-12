import React,{useEffect} from 'react'
import { useSelector} from 'react-redux'
import {useHistory} from "react-router"
export default function RouteProtection({Component}) {
   const {isAuthticated}=useSelector(state=>state.loginUser)
//   const Comp=props.component
   const history=useHistory()
   useEffect(() => {
        if(!isAuthticated)
        {
            history.push("/account/Login")   
        }
    }, [])
    return (
        <div>
            <Component/>
        </div>
    )
}
