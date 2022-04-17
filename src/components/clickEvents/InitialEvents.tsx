import { useState, useEffect, useRef} from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import Lottie from 'lottie-web'
import * as location from '../../../public/43310-globe-map-1.json'

function LocationMarker() {
    const [position, setPosition] = useState(null);    
    const map = useMap();
    const container = useRef(null);

    useEffect(() => {

      Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: location
      });

      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });

      return () => {
        Lottie.destroy();
      };
    }, []);

    return position === null ? (
      <div ref={container} />
    ) : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  export default LocationMarker