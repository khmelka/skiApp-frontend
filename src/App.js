import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Map from './components/Map'
import Favorites from './components/Favorites'


function App() {
  return (
    <div>
       <Router>
              
              <Route path="/login" component={Login} >

              </Route>
              <Route exact path="/" component={Signup} >

              </Route>

              
              
              <Route path="/home" component={Map} /> 
              {/* <Route path="/favorites" component={Favorites} /> */}
       
      </Router>
    </div>
  );
}

export default App;
