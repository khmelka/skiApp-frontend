import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Map from './components/Map'
import Test from './components/Test'

export class MainPage extends Component {
    render() {

        return (
            
          
            <Router>
              <div>
                    <Route path="/login" component={Login} >

                    </Route>
                    <Route exact path="/" component={Signup} >

                    </Route>

                    <Route exact path="/map" component={Map}>
                    </Route>
                    
              </div>
             
            </Router>
           
           
        )
    }
}

export default MainPage
