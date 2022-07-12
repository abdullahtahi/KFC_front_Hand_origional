import React,{useEffect,useState} from 'react'
export default function Api() {
    const [loading,setloading]=useState(false)
    const [countrys,setcountrys]=useState([])
    const country= async()=>{
        setloading(true)
     await fetch("https://restcountries.eu/rest/v2/all")
    .then((Response)=>Response.json())
    .then((receive)=>{
    setloading(false)
    setcountrys(receive)})
}
useEffect(() => {
country();
}, [])
return (
        <div className="row">{
                        loading ?<h1>"loading"</h1>: countrys.map((loop)=><div class="card col-md-4" >
            <img class="card-img-top" src={loop.flag} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{loop.name}</h5>
              <p class="card-text">{loop.acronym}</p>
              
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>)
            }
            
        </div>
    )
}
