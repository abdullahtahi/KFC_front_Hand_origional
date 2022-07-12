const initailState=1
export const counterreducer=(state = initailState,  action) => {
    switch (action.type) {
    case 'INCREMENT':
        const item=action.payload
        return state+1     
case'DECREMENT':
        return state-1 
    default:
        return state
    }
}
