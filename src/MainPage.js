import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Map from './components/Map'
import Test from './components/Test'
import Home from './components/Home'
import Favorites from './components/Favorites'
import NavBar from './components/Navbar'
// import MapContainer from './components/Map';
import HomeContainer from './components/HomeContainer';
import FavContainer from './components/FavContainer'

export class MainPage extends Component {

    state = {
        resorts: [],
        favs: [],
        selectedResort: null,
        activePage: "home"
    }

    setSelectedResort = (resort) => {
     this.setState({
         selectedResort:resort
     })
    }

    addFav=(resort)=> {
        console.log("MAPS", resort)
        console.log("lalal", this.state)
            if (!this.state.favs.includes(resort)){
               this.setState({favs: [...this.state.favs, resort]})
            }
        }

    componentDidMount(){

        fetch("http://localhost:3000/resorts")
        .then(resp=>resp.json())
        .then(resorts=> {
            // console.log("hifsdfsdii", resorts)
            this.setState({
                resorts
            })
          })
        }
       
           
    

    render() {

        // console.log("yesss", this.state.resorts)
        return (
            
            <div>

                <NavBar />
                <div className="home">
                <HomeContainer resorts={this.state.resorts} setSelectedResort={this.setSelectedResort} />
                <Map resorts={this.state.resorts} setSelectedResort={this.setSelectedResort} selectedResort={this.state.selectedResort} favs={this.state.favs} addFav={this.addFav}/>
                <FavContainer favs={this.state.favs}/>
                </div>
                
           </div>
        )
        
    }
}

export default MainPage
