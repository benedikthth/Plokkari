import { useState, useEffect, useRef} from 'react'
import Lottie from 'lottie-web'
import * as location from '../../../public/43310-globe-map-1.json'

function Loading() {
    const container = useRef(null);

    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: location
      });
      return () => {
        Lottie.destroy();
      };
    }, []);

    return (
      <div ref={container} className="lottie-player" />     
    )
  }

  export default Loading