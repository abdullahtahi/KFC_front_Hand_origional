const initialState = { addcart:[]}

export const addCartReducer=(state = initialState, action) => {
    switch (action.type){
        
    case 'ADD_TO_CART':
    const item=action.payload
    const isitemexist=state.addcart.find((ploop)=>ploop.id===item.id)
    if(isitemexist){
    
        // const updatestate={...isitemexist,counter:isitemexist.counter++,price:action.payload.price+action.payload.price}
    //    state:updatestate
        return {
          ...state 
}
    }
    else{
        return{
            ...state,addcart:[...state.addcart,item]


        }
    }

    // case "INCREMENTS":
    //     let updatecart=state.addcart.map((ploop)=>{
    //         if(ploop.id===action.payload)
    //     {
    //          return {
    //              ...ploop,counter:ploop.counter+1 
    //          }
    //     }
    //     return ploop   
    //     })   

    // return {
    //     ...state,addcart:updatecart    

    // }

    
    case 'REMOVE_CART':
    const removecart=state.addcart.filter((ploop)=>ploop.id!==action.payload)
    
// const removecounter=removecart.counter

return{
...state,addcart:removecart
    }
        
    default:
        return state
    }
}