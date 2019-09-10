import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
// import Favorites from './Favorites'


export default class Navbar extends Component {
    

    render() {
        return (
            <div className='navbar navbar-light bg-transparent mt-1'>
                <div>
                    <Link className="link" to="/home"> <p className="navbar-brand">Home</p></Link>
                </div>
                   <div>
                       <Link className="link" to="/favorites"> <p className="navbar-brand">Favorites</p></Link>
                    </div>
                    
                    <div className="text">
                        <Link className="link" to="/login"> <p className="navbar-brand">Sign Out</p></Link>
                    </div>
          </div>
           
        
        )
    }
}
