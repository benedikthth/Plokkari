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
  
  const [mode, setMode] = useState('simple_select');

  return (
    <MapContainer
      center={[33.43742900592779, -40.618167515754536]}
      zoom={17}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%"}}
      maxZoom={18}
      minZoom={14}
      animate={false}
    >
      <TileLayer
        attribution="attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
      />
      <InitialEvents/>
      <GetHex />
      <DrawHex />
    </MapContainer>
  );
};

export default Map;
