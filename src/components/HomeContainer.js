import React, { Component } from 'react'
import Home from './Home'

export default function HomeContainer ({resorts, setSelectedResort}){
   
        return (
            <div>
                
                <ul class="list-group">
                      {resorts.map((resort)=> {
                             return  <Home resort={resort} setSelectedResort={setSelectedResort} resortname={resort.resortname} logo={resort.logo} score={resort.score} latitude={resort.latitude} longitude={resort.longitude}/>   
                         })}
                     </ul>
               
            </div>
        )
    
}
