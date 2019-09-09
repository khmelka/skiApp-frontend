import React, { useState } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import {BrowserRouter as Link} from 'react-router-dom'
import * as skiresorts from './skiresorts.json'
import Rating from './Rating'
import Heart from './Heart'
import Home from './Home'


function GMap() {
    const [selectedResort, setSelectedResort] = useState(null)


            return (
                
                
               
                <div>   
                <GoogleMap defaultZoom={7.5} defaultCenter={{lat: 39.739235, lng: -104.990250 }} 
                  >
                
                {skiresorts.skiresorts.map((resort) => (
                    <Marker 
                      key={resort.skiresorts} 
                      position={{
                          lat: resort.latitude,
                          lng: resort.longitude

                      }}
                      


                      onClick={() => {
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
                                  

                                 </div>
                      
                        </InfoWindow>
                        
                        
                        </div>

                    )}
                </GoogleMap>
                
                <div>
                    {skiresorts.skiresorts.map((resort)=> {
                        return <Home resort={resort.name} />
                    })}
                
                </div>
               
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
