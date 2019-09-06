import React, { useState } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import {BrowserRouter as Link} from 'react-router-dom'
import * as tennisCourts from './tennisCourtsJSON.json'


function GMap() {
    const [selectedCourt, setSlectedCourt] = useState(null)
            return (
                <GoogleMap defaultZoom={12} defaultCenter={{lat: 39.739235, lng: -104.990250 }} 
                  >
                
                {tennisCourts.tennisCourts.map((court) => (
                    <Marker 
                      key={court.tennisCourts} 
                      position={{
                          lat: court.Latitude,
                          lng: court.Longitude

                      }}

                      onClick={() => {
                          setSlectedCourt(court)
                      }}
                      icon={{
                      url: './iconfinder_Tennis_Ball_22985.png',
                      scaledSize: new window.google.maps.Size(32, 32)
                      }}
                    />
                ))}

                    {selectedCourt && (
                        <InfoWindow
                                position={{
                                    lat: selectedCourt.Latitude,
                                    lng: selectedCourt.Longitude
                                }}

                                onCloseClick={() => {
                                    setSlectedCourt(null)
                                }}
                            >
                                <div>
                                    <p>{selectedCourt.name}</p>
                                    <p>{selectedCourt.address}</p>
                                    <p><img src={selectedCourt.tennisCourts_courtIcon} /> {selectedCourt.numberOfCourts}</p>
                                    <button type="submit" className="btn btn-success btn-success" id="but1"><Link to="/home">Book Time</Link></button>
                            
                                 </div>
                      
                        </InfoWindow>
                    )}

                </GoogleMap>
                
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

