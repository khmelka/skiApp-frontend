import React, { Component } from 'react'
import Map from './Map'
import Navbar from './Navbar'

function Favorites(props) {

   
        // console.log("favs", this.props.resortname)
        return (
            <div>
                <a href="#" class="list-group-item list-group-item-action">
                    <p> <img src={props.logo} id="img"/> {props.resortname}  </p>
                </a>
             </div>
        )
    
}

export default Favorites
