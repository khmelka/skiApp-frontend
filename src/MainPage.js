import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Map from './components/Map'
import Test from './components/Test'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Navbar from './components/Navbar'
// import MapContainer from './components/Map';
import HomeContainer from './components/HomeContainer';
import FavContainer from './components/FavContainer'

export class MainPage extends Component {

    state = {
        resorts: [],
        selectedResort: null,
        activePage: "home",
        favs: []
    }

    setSelectedResort = (resort) => {
     this.setState({
         selectedResort:resort
     })
    }

    // addFav=(resort)=> {
    //     if (!this.state.favs.includes(resort)){
    //         this.setState({favs: [...this.state.favs, resort]})
    //     }
    //   }

    //   removeFav=(resort)=>{
    //     this.setState({favs: this.state.favs.filter(favresort=>favresort !== resort)})
    //   }

    componentDidMount(){

        fetch("https://blooming-everglades-24576.herokuapp.com/resorts")
        .then(resp=>resp.json())
        .then(resorts=> {
            // console.log("hifsdfsdii", resorts)
            this.setState({
                resorts
            })
          })
    }

    render() {
        return ( 
            <div>
                {/* <Test /> */}
                {/* <Navbar /> */}
                <div className="home">
                    <HomeContainer resorts={this.state.resorts} setSelectedResort={this.setSelectedResort} />
                    {/* <FavContainer favs={this.state.favs} removeFav={this.removeFav}  /> */}
                    <Map resorts={this.state.resorts} setSelectedResort={this.setSelectedResort} selectedResort={this.state.selectedResort} favs={this.state.favs} addFav={this.props.addFav}/>
                </div>
            </div>
        )
        
    }
}

export default MainPage
