import React,{Component}from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Home extends Component{    
    render(){
        console.log(this.props)
        const {posts}=this.props;
        const postList=posts.length ? (
            posts.map(post =>{
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                            <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No post yet</div>
        )
    return (
     <div className="container">
         <h1 className="center">ALL BLOGS</h1>
        {postList}
     </div>
    )
}
}
const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Home);