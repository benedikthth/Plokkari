import { useEffect, useRef, useState } from 'react';
import { FeatureGroup, Polygon, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw';
//import CongrazBox from '../congrazBox/CongrazBox';

function DrawHex() {
    const featureGroupRef = useRef(null);
    const h3 = require("h3-js");
    const [data, setData] = useState([]);  
    const map = useMap();

    const [draw, setDraw] = useState({
      circlemarker: false,
      marker: false,
      polyline: false,
      rectangle: false,
      circle: false
    })

    const edit={
      edit: false,
      remove: false
    }

    const _onDrawStart = () => featureGroupRef.current.clearLayers();

    const _onCreated = (e) => {
      let geometry = e.layer.getLatLngs()[0].map(points => Object.values(points));
      console.log(e)
      const data = h3.polyfill(geometry, 12);
      const coordinates = h3.h3SetToMultiPolygon(data, false);
      setData(coordinates)
      //fetch('http://spock.is:5000/api/Trash', {
      //  method: 'POST',
      //  headers: {
      //    'Accept': 'application/json',
      //    'Content-Type': 'application/json',
      //  },
      //  body: JSON.stringify({
      //    hexIds: data
      //  })
      //})
      _onDrawStart()
    }
    
    useEffect(() => {
      map.on('zoom', function(e) { 
        if (e.sourceTarget.getZoom() < 16) {
          setDraw(prevInfo => ({...prevInfo, polygon: false, }))
          console.log(draw)
        } else {
          setDraw(prevInfo => ({...prevInfo, polygon: true, }))
          console.log(draw)
        }
      })
    }, []);

    var renderedPolygon = data.map(coordinateSet => <Polygon key={data.indexOf(coordinateSet)} color="green" positions={coordinateSet}/>)
    
//    {(data.map(coordinateSet => <Polygon key={data.indexOf(coordinateSet)} color="green" positions={coordinateSet}/>))}
    return (
      <div>
        {renderedPolygon}
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