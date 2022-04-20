import { useState, useEffect, useRef} from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import Loading from '../loading/Loading'

function InitialEvents() {
    const [position, setPosition] = useState(null);    
    const map = useMap();



    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom(), {animate: false});
      });
    }, []);


    return position === null ? (
      <Loading/>     
      ) : (
        <Marker position={position}>
          <Popup>{"Þú ert hér"}</Popup>
        </Marker>
      );
  }

  export default InitialEvents