const initialvalue = { products:[]}
export const productReducer=(state=initialvalue,action)=>{
    switch(action.type){
        case'ALLPRODUCT_REQUEST':
        return{
        loading:true,
        products:[]
    }
        case'ALLPRODUCT_SUCCESS':
        return{
        loading:false,
        products:action.payload
    }
    default:
        return state
    }

}