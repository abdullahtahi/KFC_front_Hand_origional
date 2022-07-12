

export const loginUser=(state ={user:{}}, action) => {
    switch (action.type) {

    case "LOGIN_REQUEST":
        case "ONLOAD_REQUEST":
   
    return {
        loading:true,
        isAuthticated:false,
        user:{}

        }

        case "LOGIN_SUCCESS":
            case "ONLOAD_SUCCESS":

            return {
                loading:false,
                isAuthticated:true,
                user:action.payload
        
                }
                case"LOGOUT_REQUEST":
                return {
                    loading:true,
                    
                }
                case "LOGOUT_SUCCESS":
                    return {
                        loading:false,
                        isAuthticated:false,
                        user:null

                    }

    default:
        return state
    }
}
