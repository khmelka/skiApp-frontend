import React, { Component } from 'react'
import Datetime from 'react-datetime';


export default class Calendar extends Component {

  render() {
    return (
    
    <div>

    <Datetime />
    <button type="submit" className="btn btn-success btn-success" >Submit</button>
    </div>
    )
    
}
}
