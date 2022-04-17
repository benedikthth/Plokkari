import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import LocationMarker from "../clickEvents/InitialEvents"

const Map = () => {
  return (
    <MapContainer
      center={[33.43742900592779, -40.618167515754536]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%", }}
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
