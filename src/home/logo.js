import React, {Component} from 'react';
import logo from './burger-queen-logo.jpg';
import './home.css';

class ComponentHome extends Component{
    render(){
        return (
    <div className="row">
    <div className="logo">
        <img alt="logo" className="logo" src={logo} width="85" height="80" />
    </div>
    </div>    
        );
    }
}    

export default ComponentHome;