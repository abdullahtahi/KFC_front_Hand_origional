import { combineReducers, createStore } from "redux";
import {counterreducer} from '../reducer/reducer'
import { todoreducer } from "../reducer/todoreducer";
import {productReducer} from "../reducer/productReducer"
import {categoryReducer} from "../reducer/categoryReducer"
import { addCartReducer } from "../reducer/addCartReducer";
import {loginUser} from "../reducer/loginUser"
import {onLoadReducer} from '../reducer/onLoadReducer'
const Reducer=combineReducers({
    counterreducer,
    todoreducer,
    productReducer,
    categoryReducer,
    addCartReducer,
    loginUser,
    onLoadReducer
})
const initialState={
    addCartReducer:{
        addcart:localStorage.getItem("cartitems")?JSON.parse(localStorage.getItem("cartitems")):[]
    }
}
export const store =createStore(Reducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log(store.getState())