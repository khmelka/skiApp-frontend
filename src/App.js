import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Map from './components/Map'
import Favorites from './components/Favorites'
import MainPage from './MainPage'
import FavContainer from './components/FavContainer'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  state = {
    favs: []
  }

  addFav=(resort)=> {
    console.log("MAPS", resort)
    console.log("lalal", this.state)
    if (!this.state.favs.includes(resort)){
        this.setState({favs: [...this.state.favs, resort]})
    }
  }

  render() {
      return (
        <div>
          <Router>
          <Navbar />
              <Route path="/login" component={Login} />
                <Route exact path="/" component={Signup} />
                <Route path="/home" render={(...props) => <MainPage addFav={this.addFav}/>} /> 
                <Route path="/favorites"  render={(...props) => <FavContainer favs={this.state.favs}/>}/>
                
            </Router>
        </div>
      );
   }
}

export default App;
