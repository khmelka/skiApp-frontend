import React, { Component } from 'react'
import Home from './Home'
import Map from './Map'
import * as skiresorts from './skiresorts.json'
import Navbar from './Navbar';


export default class Test extends Component {
    render() {
        


        return (
            <div>
                <div>
                    <Map />
                    <Navbar />
                    <ul class="list-group">
                        {skiresorts.skiresorts.map((resort)=> {
                            return <Home resort={resort.name} logo={resort.logo} score={resort.score} latitude={resort.latitude} longitude={resort.longitude}/>
                        })}
                    </ul>
                 </div>
                
                
            </div>
        )
        
    }
}


