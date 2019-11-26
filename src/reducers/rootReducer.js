const initState={
    posts:[
        {id:'1',
            title:'abcd',
            body:'efgh'},
        {id:'2',
            title:'bcd',
            body:'ria'},
        {
            id:'3',
            title:'yz',
            body:'jkl'}
    ]
}
const rootReducer=(state=initState,action)=>{
    if(action.type==='DELETE_POST'){
        let newPosts=state.posts.filter(post=>{
            return action.id!=post.id});
            return{
                ...state,
                posts:newPosts
            }
    }
return state;
}
export default rootReducer