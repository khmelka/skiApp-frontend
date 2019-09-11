import React, {useState, Component } from 'react'
import Navbar from './Navbar'



function Home(props) {

    // console.log("NOOOO", this.props.resort)
    
    return (
    
    
            <div  onClick={() => {
              console.log("great", props.resort)
              props.setSelectedResort(props.resort)
          }}>
    
        
         
         
         <a href="#" class="list-group-item list-group-item-action">
            <p> <img src={props.logo} id="img"/> {props.resortname} </p>
                </a>
        
        
                
     </div>
    )
  
}

export default Home
