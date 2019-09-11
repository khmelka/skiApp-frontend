import React, { Component } from 'react'



export class Home extends Component {
  render() {
    // console.log("NOOOO", this.props.resort)
    
    return (
    
    
            <div  onClick={() => {
              console.log("great", this.props.resort)
              this.props.setSelectedResort(this.props.resort)
          }}>
    
        
         
         
         <a href="#" class="list-group-item list-group-item-action">
            <p> <img src={this.props.logo} id="img"/> {this.props.resortname} </p>
                </a>
        
        
                
     </div>
    )
  }
}

export default Home
