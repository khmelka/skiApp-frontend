import React, { Component } from 'react'


function Favorites(props) {

    const handleClick = (fav) => {
        props.removeFav(fav)
      }
      
        return (

            <div className="list-group-item list-group-item-action" style={{display: "block"}}>
                 <a href="#">
                    <div className="favs">{props.resortname}<button type="button" class="close" aria-label="Close" style={{}} onClick={()=>handleClick(props.fav)}>x</button></div> 
                </a>
             </div>
        )
    
}

export default Favorites
