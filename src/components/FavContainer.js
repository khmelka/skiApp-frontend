import React, { Component } from 'react'
import Favorites from './Favorites'
import Navbar from './Navbar'
import Map from './Map'

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
