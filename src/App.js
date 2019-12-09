import React,{Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';
import Start from './components/Start';
import './list.css'
 class App extends Component{
   render(){
  return (
    <BrowserRouter>
    <div className="App">
     
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Start}/>
<Route path='/home' component={Home}/>
<Route path='/contact' component={Contact}/>
<Route path='/about' component={About}/>
<Route path='/:post_id' component={Post}/>
</Switch> 

    </div>
    </BrowserRouter>
  );
}
 }
export default App;
