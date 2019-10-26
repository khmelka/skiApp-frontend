import React, { Component } from 'react'
import Favorites from './Favorites'

export default function FavContainer(props){
    return (
        <div>
            <ul className="list-group">
                {props.favs.map((fav)=> {
                    return  <Favorites fav={fav} resortname={fav.resortname} logo={fav.logo} removeFav={props.removeFav}/>   
                    })}
                </ul>           
        </div>
     )   
}
