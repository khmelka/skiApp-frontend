import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Map from './components/Map'
import Test from './components/Test'
import Home from './components/Home'

export class MainPage extends Component {
    render() {

        return (
            
          
            <Router>
              
                    <Route path="/login" component={Login} >

                    </Route>
                    <Route exact path="/" component={Signup} >

                    </Route>

                    {/* <Route path="/map" component={Test}>
                    </Route> */}
                    
                    <Route path="/home" component={Test} />
                {/* <Route path="/favorites" component={Favorites} /> */}
             
            </Router>
           
           
        )
    }
}

export default MainPage
