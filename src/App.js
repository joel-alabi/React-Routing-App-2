import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Branches from './Pages/Branches';

function App() {
  return (
    <Router>
    <div className="App">
     <div className="container-fluid">
       <div className="row">
         <div className="col-3">
         <Link to="/Home">Home</Link>
         </div>
         <div className="col-3">
         <Link to="/About">About</Link>
         </div>
         <div className="col-3">
         <Link to="/Contact">Contact</Link>
         </div>
         <div className="col-3">
         <Link to="/Branches">Branches</Link>
         </div>
       </div>
     </div>  
    </div> 
       
       
        <Route path="/home" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/branches" exact component={Branches}/>
    </Router> 
      
        
           
  );
}

export default App;
