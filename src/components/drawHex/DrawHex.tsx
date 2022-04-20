import { useEffect, useRef, useState } from 'react';
import { FeatureGroup, Polygon } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw';
import CongrazBox from '../congrazBox/CongrazBox';

function DrawHex() {
    const featureGroupRef = useRef(null);
    const h3 = require("h3-js");
    const [data, setData] = useState([]);  
    

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
      let geometry = e.layer.toGeoJSON().geometry.coordinates;//.coordinates;//#flatMap(x=>[x[1], x[0]]);
      geometry = geometry.map(x=>x.map(y=>[y[1],y[0]]));
      const data = h3.polyfill(geometry, 12);
      // const coordinates = data.map(x=>h3.h3SetToMultiPolygon([x], false));
      const coordinates = h3.h3SetToMultiPolygon(data, false);
      setData(coordinates)
      console.log(data)
      fetch('http://spock.is:5000/api/Trash', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hexIds: data
        })
      })
    }
    
    
//    {(data.map(coordinateSet => <Polygon key={data.indexOf(coordinateSet)} color="green" positions={coordinateSet}/>))}
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
    </div>
    )
}


export default DrawHex;