import React, { Component } from 'react'
import Favorites from './Favorites'


export default class FavContainer extends Component {

    render(){
    return (
        <div>
            <ul className="list-group">
                {this.props.favs.map((fav)=> {
                    return  <Favorites fav={fav} resortname={fav.resortname} logo={fav.logo} removeFav={this.removeFav}/>   
                    })}
                </ul>           
        </div>
     )   
  }
}
