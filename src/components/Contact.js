import React,{Component} from 'react'

class Contact extends Component{
   constructor(props){
       super(props);
       this.state={
           items:[],
           isLoaded:false,
       }
   }
   componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=>res.json())
       .then(json=>{
           this.setState({
               isLoaded:true,
               items:json,
           })
       })
   }
    render(){
        var{isLoaded,items}=this.state;
        if(!isLoaded)
        {
            return <div>Loading</div>
        }
        else{
        return(
            <div>
    <ul>
        {items.map(items=>(
<li className="list" key={items.id}>
 Name: {items.name} <br/>
  Email:{items.email} 
  <br/><br/>
</li>
        ))}
    </ul>
</div>
        )
    }
}
}
export default Contact;