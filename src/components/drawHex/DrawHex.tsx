import { useRef } from 'react';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw';

function DrawHex() {
    const featureGroupRef = useRef(null);
    const h3 = require("h3-js");

    return (
        <FeatureGroup ref={featureGroupRef}>
        <EditControl
          position="topleft"
          onDrawStart={() => {
            featureGroupRef.current.clearLayers();
          }}
          onCreated={(e) => {
            //console.log(h3.polyfill(e.layer._latlngs, 10))
            //const correct = e.layer._latlngs.map(x => x.LatLng)
            console.log(e.layer.getLatLngs().map(point => [point.lat, point.lng]))

            //console.log(h3.polyfill(correct, 10))
          }}
          draw={{
            circlemarker: false,
            marker: false,
            polygon: true,
            polyline: false,
            rectangle: false,
            circle: false
          }}
          edit={{
            edit: false,
            remove: false
          }}

        />
      </FeatureGroup>
    )
}


export default DrawHex;