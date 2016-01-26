
import React from 'react';
import {GoogleMapLoader, GoogleMap} from "react-google-maps";

export default (props)=>{

	return (    
	
	      <GoogleMapLoader
	        containerElement={<div {...props} style={{height: "100%"}} />} 
	        googleMapElement={
	        	<GoogleMap 
	        	defaultZoom={5} 
	        	defaultCenter={{lat: props.lat, lng: props.lon}} 
	        	/>}

	       />
	
	  );
}