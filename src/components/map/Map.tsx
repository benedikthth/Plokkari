import { MapContainer, TileLayer} from "react-leaflet";
import { useRef, useState } from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


import InitialEvents from "../initialEvents/InitialEvents"
import GetHex from "../getHex/GetHex";
import DrawHex from "../drawHex/DrawHex";
import CongrazBox from "../congrazBox/CongrazBox";




const Map = () => {

  const [h3Data, setH3Data] = useState(null);
  const getData = (x) => { setH3Data(x) }
  const resetDrawHexFunction = useRef(null)
  const triggerGetHexFunction = useRef(null)
  const eraseData = () => { 
    triggerGetHexFunction.current();
    resetDrawHexFunction.current();
    setH3Data(null);
 }
  

  return (
    <> 
     { h3Data && <CongrazBox data={h3Data} eraseData={eraseData}/> }
      <MapContainer
      center={[33.43742900592779, -40.618167515754536]}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%"}}
      maxZoom={18}
      minZoom={13}
      animate={false}
      doubleClickZoom={false}
      >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <InitialEvents/>
      <GetHex triggerGetHexFunction={triggerGetHexFunction} />
      <DrawHex getData={getData} resetDrawHexFunction={resetDrawHexFunction}/>
    </MapContainer>   
  </>
  );
};

export default Map;
