const initialvalue = { category:[]}
export const categoryReducer=(state=initialvalue,action)=>{
    switch(action.type){
        case'CATEGORY_REQUEST':
        return{
        loading:true,
        category:[]
    }
        case'CATEGORY_SUCCESS':
        return{
        loading:false,
        category:action.payload
    }
    default:
        return state
    }

}