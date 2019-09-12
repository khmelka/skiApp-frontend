import React, {useState, useEffect, Component} from 'react'
// import {Map, InfoWindow, Marker, GoogleApiWrapper, GoggleMap} from 'google-maps-react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'

import Rating from './Rating'
import Heart from './Heart'
import Home from './Home'
import axios from 'axios'
import Navbar from './Navbar';
import Test from './Test'
import Favorites from './Favorites';
import FavContainer from './FavContainer';
import HomeContainer from './HomeContainer'


// export class MapContainer extends Component {

//     state = {
//         showingInfoWindow: false,
//         activeMarker: {},
//         selectedPlace: {},
//       }

//     render() {
//         // console.log("yoyoy", this.props.resorts)
//         return (
//             <div>
//                 {/* {this.props.resorts.map(resort=>(
//                     <>
//                     {resort.resortname}
//                     </>
//                 ))} */}

                
//                  <Map  google={this.props.google}  className={'map'} defaultZoom={7.5} center={{lat: 39.739235, lng: -104.990250 }}  style={{width: '120rem', height: '80rem', position: 'absolute', margin: "auto"}} >
                 

//                     <Marker onClick={this.onMarkerClick}
//                             name={'Current location'} />

//                     <InfoWindow onClose={this.onInfoWindowClose}>
//                         <div>
//                         {/* <h1>{this.state.selectedPlacet.name}</h1> */}
//                         </div>
//                     </InfoWindow>
//                     </Map>
                    
//             </div>
//         )
//     }
// }







// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyD8Jr8yyjkIQ2PUnGxroY_g9MyLVFVqr0o'
//   })(MapContainer)



function GMap(props) {
    const [resorts, setResort] = useState([])
    // const [favs, setFavs] = useState([])
    const [showFavs, setShowFavs] = useState(false)
            
            console.log("props",props.addFav)
            return (
             
                <div>
                    
                            <GoogleMap defaultZoom={8.5} defaultCenter={{lat: 39.739235, lng: -106.11 }} 
                            >
                            
                            {props.resorts.map((resort) => (
                                <Marker 
                                key={resort.id} 
                                position={{
                                    lat: resort.latitude,
                                    lng: resort.longitude

                                }}
                                


                                onClick={() => {
                                    console.log("HOOO", resort)
                                    props.setSelectedResort(resort)
                                }}
                                icon={{
                                url: './ski.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                }}
                                />
                            ))}
                                

                            
                                {props.selectedResort && (
                                    <div>
                                        <InfoWindow
                                                position={{
                                                    lat: props.selectedResort.latitude,
                                                    lng: props.selectedResort.longitude
                                                }}

                                                onCloseClick={() => {
                                                    props.setSelectedResort(null)
                                                }}
                                            >
                                                <div>
                                                    <img src={props.selectedResort.logo} id="logo" /> 
                                                    <p><b>{props.selectedResort.resortname}</b></p>
                                                    <p>Annual Snowfall: {props.selectedResort.annualsnow}</p>
                                                    <p>PAF Score: {props.selectedResort.score}%</p>
                                                    <p>Number of Lifts: {props.selectedResort.lifts}</p>
                                                    <Rating />
                                                    <button type="submit" className="btn btn-info" id="but1" onClick={()=>props.addFav(props.selectedResort)} >Add to Favs</button> 
                                                

                                                </div>
                                    
                                        </InfoWindow>
                                        
                                    
                                    </div>
                
                                )}
                                
                            </GoogleMap>     
                </div>  
        )      
    }

const WrappedMap = withScriptjs(withGoogleMap(GMap))

export default function Map(props) {
    return (
        <div className="map">
                <WrappedMap
                    resorts = {props.resorts}
                    selectedResort={props.selectedResort}
                    setSelectedResort={props.setSelectedResort}
                    favs={props.favs}
                    addFav={props.addFav}
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyA-LvuuR7H1uiMkRyqW1x4Bb2n9O2Fn_aU&v=3.exp&libraries=geometry,drawing,places'} 
                    loadingElement={<div style={{height: "100%"}} />}
                    containerElement={<div className="style" />}
                    mapElement={<div style={{ height: `100%` }} />}
                    
                />
        </div>
    )
}







  