import React, { Component } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'

import * as tennisCourts from './tennisCourtsJSON.json'


function GMap() {
            return (
                <GoogleMap defaultZoom={12} defaultCenter={{lat: 39.739235, lng: -104.990250 }} 
            >
                
                {tennisCourts.tennisCourts.map((court) => (
                    <Marker 
                      key={court.name} 
                      position={{
                          lat: court.Latitude,
                          lng: court.Longitude

                      }}
                    />
                ))}

                </GoogleMap>
        )
    }

const WrappedMap = withScriptjs(withGoogleMap(GMap))


export default function Map() {
    return (
       

        <div className="map">
           <h1>HI</h1>
            
                <WrappedMap
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyD8Jr8yyjkIQ2PUnGxroY_g9MyLVFVqr0o&v=3.exp&libraries=geometry,drawing,places'} 
                    loadingElement={<div style={{height: "100%"}} />}

                    containerElement={<div className="style" style={{ }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
           
        </div>
    )
}

