import React,{useState,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
export default function Todo() {

    const todos=useSelector((state)=>state.todoreducer)
    const textvalue = useRef()
     const [todo,settodo] = useState('')
    const dispatch = useDispatch()
    const handleclick=()=>{
let object={
    id:Math.random(),
    text:todo
}

        dispatch({
  
    type:'ADD_TODO',
    payload:object
})
textvalue.current.value=""
textvalue.current.focus()
}
const handledelete=(id)=>[
dispatch({
    type:"DELETE_TODO",
    payload:id
})
]
    
return (
<div>
<span>Enter a todo text</span>
            <div class="mb-3">
  
  <input type="text" ref={textvalue} class="form-control" onChange={(ploop)=>{settodo(ploop.target.value)}} />
  <button type="button" class="btn btn-outline-dark"onClick={()=>handleclick()}>add</button>
<ul>
  {
 todos.todo.map((ploop)=><li onClick={()=>handledelete(ploop.id)}>{ploop.text}</li>)
}
</ul>

</div>
        </div>

)
}
