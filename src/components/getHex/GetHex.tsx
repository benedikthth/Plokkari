import { useState, useEffect, useRef} from 'react'
import { useMap, Polygon, Marker, Polyline } from 'react-leaflet'


function GetHex() {
    const [data, setData] = useState(null);  
    const map = useMap();
    const h3 = require("h3-js");
    const boundedHex = [];
    let number = 0;

    useEffect(() => {
      map.on('moveend', function() { 
        let location = {east: map.getBounds().getEast(), west:  map.getBounds().getWest(), south: map.getBounds().getSouth(), north: map.getBounds().getNorth()};
        fetch(`http://spock.is:5000/api/Trash?LowerLatBound=${location.west}&LowerLngBound=${location.south}&UpperLatBound=${location.east}&UpperLngBound=${location.north}`)
            .then(res => res.json())
            .then( data => {
                if (data !== null) {
                  setData(data.map(hexOnly => hexOnly.h3Id))
                  
                }
            })        
      })
    }, []);


    if (data !== null) {
      const coordinates = h3.h3SetToMultiPolygon(data, false);
      console.log(coordinates)
    
      coordinates.forEach((data) => {
        boundedHex.push(<Polygon key={number = number +1} positions={data}/>)
      })
    }
    return (
      <div>
          {boundedHex}  
      </div>  
    )
  }

  export default GetHex