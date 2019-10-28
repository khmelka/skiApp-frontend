import React, { Component } from 'react'
import axios from 'axios';
import Fav from './Fav';


class Favorites extends Component {


  resortUrl = "http://localhost:3000/resorts"
  tripsUrl = "http://localhost:3000/trips"

state = {
    newtrip:{
        
        date:"",
        notes:"",
    },
    trips:[]
}

changeHandler=event=>{
  this.setState({[event.target.name]: event.target.value})
}

componentDidMount(){

  fetch(this.tripsUrl)
  .then(resp=>resp.json())
  .then(trips=> {
      console.log("trips", trips)
      this.setState({
          trips
      })
    })
}


    tripsPost= event => {
    event.preventDefault();
    // add call to AWS API Gateway add product endpoint here
    const params = {
        
        date:"",
        notes:"",
      }
      axios.post(this.tripsUrl, params);
      this.setState({trips: [...this.state.trips, this.state.newtrip]});
        
      console.log("newtrips", this.state.newtrip)
    
    
      
    
  }


    handleClick = (fav) => {
        this.removeFav(fav)
      }
      
      render() {
        console.log("this.trips",this.state.trips)
        const {date, notes} = this.state
        return (
          <div>
            {this.props.resortname}
            <form className = "tripContainer" onSubmit={this.tripsPost}>
               <div className="form-group row">
                   <div class="col-sm-10">
                   <input type="text" readonly class="form-control-plaintext" 
                   name="date" 
                   value={date} 
                   onChange={this.changeHandler}/>
                  </div>
                </div>    
                <div className="form-group">
                    <input type="text-area" className="form-control" aria-describedby="emailHelp" placeholder="notes" 
                    name="notes" 
                    value={notes} 
                    onChange={this.changeHandler}/>
                    <div style={{ fontSize: 12, color: "red" }}>
                    </div>
                  </div>
                  <div className="control">
                   <button type="submit" className="button is-primary is-medium">
                      Add Trip
                   </button></div>
            </form>
          
            {/* <div className="list-group-item list-group-item-action" style={{display: "block"}}>
                 <a href="#">
                    <div className="favs">{props.resortname}<button type="button" class="close" aria-label="Close" style={{}} onClick={()=>handleClick(props.fav)}>x</button></div> 
                </a>
             </div> */}
             {/* <ul className="list-group">
                    {this.state.trips.map((trip)=> 
                   <li> {trip.date} </li>
                    )}
                </ul>     */}
                   
          </div>
        )
     } 
}

export default Favorites





// render() {
// return (
//     <Fragment>
//     <section className="section">
//       <div className="container">
//         <h1>Product Admin</h1>
//         <p className="subtitle is-5">Add and remove trips using the form below:</p>
//         <br />
//         <div className="columns">
//           <div className="column is-one-third">
//             <form onSubmit={event => this.tripsPost(this.state.newtrip.id, event)}>
//               <div className="field has-addons">
//                 <div className="control">
//                   <input 
//                     className="input is-medium"
//                     type="text" 
//                     placeholder="Enter name"
//                     value={this.state.newtrip.trips}
//                   />
//                 </div>
//                 <div className="control">
//                   <input 
//                     className="input is-medium"
//                     type="text" 
//                     placeholder="Enter id"
//                     value={this.state.newtrip.id}
//                   />
//                 </div>
//                 <div className="control">
//                   <button type="submit" className="button is-primary is-medium">
//                     Add Trip
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="column is-two-thirds">
//             <div className="tile is-ancestor">
//               <div className="tile is-4 is-parent  is-vertical">
//                 { 
//                   this.state.favs.map((fav) => 
//                   <Favorites fav={fav} resortname={fav.resortname} removeFav={this.removeFav}
//                   />)
//                 }
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </Fragment>
    
//  )   
// }