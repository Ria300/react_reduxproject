const initState={
    posts:[
        {id:'1',
            title:'CONTINUOUS INTEGRATION',
            body:'Continuous integration (CI) is the practice of automating the integration of code changes from multiple contributors into a single software project. The CI process is comprised of automatic tools that assert the new code’s correctness before integration. A source code version control system is the crux of the CI process. The version control system is also supplemented with other checks like automated code quality tests, syntax style review tools, and more. '},
        {id:'2',
            title:'CLOUD MANAGEMENT',
            body:'Cloud management means the software and technologies designed for operating and monitoring applications, data and services residing in the cloud. Cloud management tools help ensure cloud computing-based resources are working optimally and properly interacting with users and other services. '},
            {
            id:'3',
            title:'CLOUD GOVERNANCE',
            body:'Cloud computing governance is a view of IT governance focused on accountability, defining decision rights and balancing benefit or value, risk, and resources in an environment embracing cloud computing. Cloud computing governance creates business-driven policies and principles that establish the appropriate degree of investments and control around the lifecycle process for cloud computing services.'},
        
            {
                id:'4',
                title:'IaaS vs PaaS',
                body:' IaaS:Cloud infrastructure services, known as Infrastructure as a Service (IaaS), are made of highly scalable and automated compute resources. IaaS is fully self-service for accessing and monitoring computers, networking, storage, and other services. IaaS allows businesses to purchase resources on-demand and as-needed instead of having to buy hardware outright.PaaS:Cloud platform services, also known as Platform as a Service (PaaS), provide cloud components to certain software while being used mainly for applications. PaaS delivers a framework for developers that they can build upon and use to create customized applications. All servers, storage, and networking can be managed by the enterprise or a third-party provider while the developers can maintain management of the applications.'
            }
    ]
}
const rootReducer=(state=initState,action)=>{
    if(action.type==='DELETE_POST'){
        let newPosts=state.posts.filter(post=>{
            return action.id!==post.id});
            return{
                ...state,
                posts:newPosts
            }
    }
return state;
}
export default rootReducer