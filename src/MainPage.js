import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'

export class MainPage extends Component {
    render() {

        return (
            <Router>
              <div>
                    <Route path="/login" component={Login} >

                    </Route>
                    <Route exact path="/" component={Signup} >

                    </Route>

                    <Route exact path="/home" component={Home}>
                    </Route>
              </div>
            </Router>
        )
    }
}

export default MainPage
