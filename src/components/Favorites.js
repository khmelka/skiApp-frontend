import React, { Component } from 'react'
import Map from './Map'
import Navbar from './Navbar'

export class Favorites extends Component {

   
    render() {
        console.log("favs", this.props.resortname)
        return (
            <div>
                <a href="#" class="list-group-item list-group-item-action">
                    <p> <img src={this.props.logo} id="img"/> {this.props.resortname} </p>
                </a>
                 <h1>Test</h1>
             </div>
        )
    }
}

export default Favorites
