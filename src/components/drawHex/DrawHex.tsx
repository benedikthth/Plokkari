import { useEffect, useRef, useState } from 'react';
import { FeatureGroup, Polygon } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw';

function DrawHex() {
    const featureGroupRef = useRef(null);
    const h3 = require("h3-js");
    const [boundedHex, setBoundedHex] = useState(null);
    let number = 0;
    const [data, setData] = useState(null);  
    const draw={
      circlemarker: false,
      marker: false,
      polygon: true,
      polyline: false,
      rectangle: false,
      circle: false
    }

    const edit={
      edit: false,
      remove: false
    }

    const _onDrawStart = () => featureGroupRef.current.clearLayers();

    const _onCreated = (e) => {
      //console.log(h3.polyfill(e.layer._latlngs, 10))
      const geometry = e.layer.toGeoJSON().geometry.coordinates;
      const data = h3.polyfill(geometry, 10);
      const coordinates = h3.h3SetToMultiPolygon(data, false);
      console.log(coordinates)
      setData(coordinates)
      var bh = [];
      coordinates.forEach((data) => {
        bh.push(<Polygon color={'green'} key={number = number +1} positions={data}/>)
      })
      setBoundedHex(bh)
    }


    return (
      <div>
        <FeatureGroup ref={featureGroupRef}>
        <EditControl
          position="topleft"
          onDrawStart={_onDrawStart}
          onCreated={_onCreated}
          draw={draw}
          edit={edit}
        />
      </FeatureGroup>
      {boundedHex}
    </div>
    )
}


export default DrawHex;