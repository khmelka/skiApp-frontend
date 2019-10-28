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
                    <Link className="link" to="/home"> <p className="navbar-brand">Resorts</p></Link>
                    {/* <div class="collapse navbar-collapse" id="navbarText"> */}
                    {/* <Link className="link" to="/favorites"> <p className="navbar-brand">Trips</p></Link> */}
                   
                    {/* <div className="test">
                    <Link className="link" to="/login"> <p className="resortTitle">Sign Out</p></Link>
                   </div> */}
                   <div className="navbar-end">
                   <img src="./000592-Skiing-Logo-design-free-logos-02.png" width="60" height="50" alt="ski logo"/><p className="titleName">Ski Buddy</p>
                   </div>
              </div>

        )
    }
}
