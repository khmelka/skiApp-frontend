import React, {useState, Component } from 'react'
import Navbar from './Navbar'



export default function Home(props) {
    // console.log("resorts from home", props.resort)
    return (
        <div class="hi" onClick={() => {
              props.setSelectedResort(props.resort)
          }}>
            <a href="#" className="list-group-item list-group-item-action">
                <p className="resortname">  {props.resortname} </p>
            </a>
         </div>
    )
  
}


