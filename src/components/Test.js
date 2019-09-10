import React, { Component } from 'react'
import Home from './Home'
import Map from './Map'
// import * as skiresorts from './skiresorts.json'
import Navbar from './Navbar';
import Favorites from './Favorites';


export default class Test extends Component {

    // state={
    //     resorts: [],
    //     favs: []
    // }

    // componentDidMount(){
    //     fetch("http://localhost:3000/resorts")
    //     .then(resp => resp.json())
    //     .then(data=> {
    //         this.setState({
    //              resorts: data 
    //             })
    //         console.log("drrrrrr", this.state.resorts)
    //      })
    // }

    // addFav=(resort)=>{
    //     if (!this.state.favs.includes(resort)){
    //         this.setState({favs: [...this.state.favs, resort]})
    //     }

    // }
  
    // state = {
    //     // selectedResort: null,
    //     setSelectedResort: null,
    //     resorts: skiresorts.default.skiresorts
           

    // }


// selectedResort = () => {
//     this.setState({selectedResort: null})
// }

// setSelectedResort(resort){
//     this.setState({setSelectedResort: resort})
// }

    render() {
    // console.log("nope", this.state.resorts)

        return (
            <div>
                <div>
                    <Map  />
                    <Navbar />
                    {/* <ul class="list-group">
                        {skiresorts.skiresorts.map((resort)=> {
                            return  <Home resort={resort.name} logo={resort.logo} score={resort.score} latitude={resort.latitude} longitude={resort.longitude}/>
                                
                        })}
                    </ul> */}
                    {/* <Favorites favs={this.addFav} /> */}
                   

                 </div>
                
                
            </div>
        )
        
    }
}


