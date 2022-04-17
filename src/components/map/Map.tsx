import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import LocationMarker from "../clickEvents/InitialEvents"

const Map = () => {
  return (
    <MapContainer
      center={[64.9631, 19.02081]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%"}}
      fadeAnimation={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker/>
    </MapContainer>
  );
};

export default Map;
