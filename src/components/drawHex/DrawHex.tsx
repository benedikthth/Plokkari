import { useEffect, useRef, useState } from 'react';
import { FeatureGroup, Polygon, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw';
//import CongrazBox from '../congrazBox/CongrazBox';

function DrawHex(props) {
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

    const { getData, resetDrawHexFunction } = props;
    
    function resetDrawing() {
      // here we delete the current shape the user is drawing
      setData([])
    }

    const _onDrawStart = () => featureGroupRef.current.clearLayers();

    const _onCreated = (e) => {
      let geometry = e.layer.getLatLngs()[0].map(points => Object.values(points));
      const data = h3.polyfill(geometry, 12);
      getData(data);
      const coordinates = h3.h3SetToMultiPolygon(data, false);
      setData(coordinates)
      _onDrawStart()
    }
    
    useEffect(() => {
      resetDrawHexFunction.current = resetDrawing;
      map.on('zoom', function(e) { 
        if (e.sourceTarget.getZoom() < 16) {
          setDraw(prevInfo => ({...prevInfo, polygon: false, }))
        } else {
          setDraw(prevInfo => ({...prevInfo, polygon: true, }))
        }
      })
    }, []);

    var renderedPolygon = data.map(coordinateSet => <Polygon key={data.indexOf(coordinateSet)} color="green" positions={coordinateSet}/>)
    
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