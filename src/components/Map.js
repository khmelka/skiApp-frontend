import React, {useState, useEffect, Component} from 'react'
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


function GMap(props) {
    const [selectedResort, setSelectedResort] = useState(null)
    const [resorts, setResort] = useState([])
    const [favs, setFavs] = useState([])
    const [showFavs, setShowFavs] = useState(false)

            useEffect(() => {
                axios
                .get(
                "http://localhost:3000/resorts"
                )
                .then((resort)=> {
                    setResort(resort.data)
                    // console.log("drrrrrr", resort.data)
                })
            }, [])

            const addFav=(resort)=>{
                console.log("MAPS", resort)
                console.log("lalal", setFavs)
                    if (!favs.includes(resort)){
                        setFavs([...favs, resort])
                    }
                }


            return (
                
                
                <div>
                <Navbar setShowFavs={setShowFavs}  />
                <GoogleMap defaultZoom={7.5} defaultCenter={{lat: 39.739235, lng: -104.990250 }} 
                  >
                
                {resorts.map((resort) => (
                    <Marker 
                      key={resorts} 
                      position={{
                          lat: resort.latitude,
                          lng: resort.longitude

                      }}
                      


                      onClick={() => {
                          console.log("HOOO", resort)
                          setSelectedResort(resort)
                      }}
                      icon={{
                      url: './ski.png',
                      scaledSize: new window.google.maps.Size(32, 32),
                      }}
                    />
                ))}
                    

                   
                    {selectedResort && (
                        <div>
                        <InfoWindow
                                position={{
                                    lat: selectedResort.latitude,
                                    lng: selectedResort.longitude
                                }}

                                onCloseClick={() => {
                                    setSelectedResort(null)
                                }}
                            >
                                <div>
                                    <img src={selectedResort.logo} id="logo" /> 
                                    <p><b>{selectedResort.name}</b></p>
                                    <p>Annual Snowfall: {selectedResort.annualsnow}</p>
                                    <p>PAF Score: {selectedResort.score}%</p>
                                    <p>Number of Lifts: {selectedResort.lifts}</p>
                                    <Rating />
                                    <button type="submit" className="btn btn-info" id="but1" onClick={()=>addFav(selectedResort)} >Add to Favs</button> 
                                  

                                 </div>
                      
                        </InfoWindow>
                        
                        
                        </div>
    
                    )}
                    
                </GoogleMap>
                
                     
                     {/* <ul class="list-group">
                      {resorts.map((resort)=> {
                             return  <Home resort={resort} setSelectedResort={setSelectedResort} resortname={resort.resortname} logo={resort.logo} score={resort.score} latitude={resort.latitude} longitude={resort.longitude}/>   
                         })}
                     </ul> */}


                     {/* <ul class="list-group">
                      {favs.map((fav)=> {
                             return  <Favorites fav={fav} resortname={fav.resortname} logo={fav.logo} />   
                         })}
                     </ul> */}
                
                {useState.showFavs=false   ? <FavContainer favs={favs}/> :
                <HomeContainer resorts={resorts} setSelectedResort={setSelectedResort}/>}

                </div> 
            
        )
        
    }

const WrappedMap = withScriptjs(withGoogleMap(GMap))


export default function Map() {

    return (
       

        
        <div className="map">
          
          
                <WrappedMap
                
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'} 
                    loadingElement={<div style={{height: "100%"}} />}
                    containerElement={<div className="style" style={{ }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
           
        </div>
    )
}
