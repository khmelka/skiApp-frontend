import React, { Component } from 'react'
import * as skiresorts from './skiresorts.json'


export class Home extends Component {
  render() {
    return (
     <div>
       {this.props.resort}
     </div>
    )
  }
}

export default Home

