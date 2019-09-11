import React, { Component } from 'react'
import Favorites from './Favorites'

export default function FavContainer({favs}){

    
        return (
            <div>
                <ul class="list-group">
                      {favs.map((fav)=> {
                             return  <Favorites fav={fav} resortname={fav.resortname} logo={fav.logo} />   
                         })}
                     </ul>
            </div>
        )
    
}
