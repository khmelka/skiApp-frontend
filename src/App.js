import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
    if (!this.state.favs.includes(resort)){
        this.setState({favs: [...this.state.favs, resort]})
    }
  }

  removeFav=(resort)=>{
    this.setState({favs: this.state.favs.filter(favresort=>favresort !== resort)})
  }

  render() {
      return (
        <div>
          <Router>
            <Navbar />
            <Switch>
              {/* <Route path="/login" component={Login} />
                <Route exact path="/" component={Signup} /> */}
                <Route path="/" render={(...props) => <MainPage addFav={this.addFav}/>} /> 
                {/* <Route path="/home" component ={MainPage} /> */}
                <Route path="/favorites"  render={(...props) => <FavContainer favs={this.state.favs} removeFav= {this.removeFav}/>}/>
              </Switch>
            </Router>
        </div>
      );
   }
}

export default App;