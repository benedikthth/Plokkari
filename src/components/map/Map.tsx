import { MapContainer, TileLayer} from "react-leaflet";
import { useState } from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


import InitialEvents from "../initialEvents/InitialEvents"
import GetHex from "../getHex/GetHex";
import DrawHex from "../drawHex/DrawHex";
//import DrawHex from "../drawHex/DrawHex";



const Map = () => {
  
  

  return (


      <MapContainer
      center={[33.43742900592779, -40.618167515754536]}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%"}}
      maxZoom={18}
      minZoom={13}
      animate={false}
      >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <InitialEvents/>
      <GetHex />
      <DrawHex />
    </MapContainer>
    

   
  );
};

export default Map;
