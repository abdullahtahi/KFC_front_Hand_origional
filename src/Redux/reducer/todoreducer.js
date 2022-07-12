const initailstate={todo:
    [
//     {
//     id:1,
//     text:"Abdullah"
// },
// {
//     id:2,
//     text:"ali"
// },
// {
//     id:3,
//     text:"Mahmood"
// }
]}
export const todoreducer=(state =initailstate, action) => {
    switch (action.type) {
case 'ADD_TODO':
return {...state,todo:[...state.todo,action.payload]}
case 'DELETE_TODO':
return {...state,todo:[...state.todo.filter((ploop)=>ploop.id!==action.payload)]}           
    default:
        return state
    }
}
