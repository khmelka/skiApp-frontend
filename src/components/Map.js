import React, { Component } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'


function GMap() {
        return (
            <GoogleMap defaultZoom={10} defaultCenter={{lat: 39.739235, lng: -104.990250 }} />
        )
    }

const WrappedMap = withScriptjs(withGoogleMap(GMap))


export default function Map() {
    return (

        <div className="map">
             <div>
                <h1>Hello User</h1>
                <h1>Please select available car</h1>
            </div>
            <div>
                <WrappedMap
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyD8Jr8yyjkIQ2PUnGxroY_g9MyLVFVqr0o&v=3.exp&libraries=geometry,drawing,places'} 
                    loadingElement={<div style={{height: "100%"}} />}

                    containerElement={<div className="style" style={{ }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    )
}
