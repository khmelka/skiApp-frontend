import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
// import Favorites from './Favorites'


export default class Navbar extends Component {
    
    // handleClick =event => {
    //     // console.log("no", this.props)
    //     this.props.setShowFavs(true)
    // }

    render() {
        return (
            
            <div className='navbar navbar-light bg-transparent mt-1'>
                <div className="text">
                    {/* <Link className="link" to="/home"> <p className="navbar-brand">Home</p></Link> */}
                    </div>
                    {/* <div class="collapse navbar-collapse" id="navbarText"> */}
                    {/* <Link className="link" to="/favorites"> <p className="navbar-brand">Favorites</p></Link> */}
                    
                    <div className="test">
                    <Link className="link" to="/login"> <p className="navbar-brand">Sign Out</p></Link>
                   </div>
              </div>
           
        
        )
    }
}
