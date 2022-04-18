import { useState, useEffect, useRef} from 'react'
import { useMap } from 'react-leaflet'
import usePrevious from './UsePrevious';



function GetHex() {
    const [data, setData] = useState(null);   
    const map = useMap();
    let east = null;
    let west = null;
    let south = null;
    let north = null;

    useEffect(() => {
      map.on('moveend', function() { 
        east = map.getBounds().getEast();
        west = map.getBounds().getWest();
        south = map.getBounds().getSouth();
        north = map.getBounds().getNorth();
        fetch(`http://spock.is:5000/api/Trash?LowerLatBound=${west}&LowerLngBound=${south}&UpperLatBound=${east}&UpperLngBound=${north}`)
            .then(res => res.json())
            .then( newRequestData => {
                // filter out unwanted data
               /* code that takes data from newRequestData and adds it to the data we already have */ 
                //setData(newRequestDataThatHasBeenFiltered); 
            
                if (data !== null) {
                    console.log(newRequestData)
                    console.log(data)
                }    
            } )            
        
      })
    }, []);
    

   

    return (
        <div></div>
        );
  }

  export default GetHex