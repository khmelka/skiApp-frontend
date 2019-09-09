import React, { Component } from 'react'
import * as skiresorts from './skiresorts.json'


export class Home extends Component {
  render() {
    return (
      <div>
         
              <li class="list-group-item d-flex justify-content-between align-items-center">
             
             

              <p> <img src={this.props.logo} id="img"/> {this.props.resort}</p>
                </li>
           
         </div>
    )
  }
}

export default Home
