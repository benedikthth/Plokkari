// imports
import React from "react";

import dynamic from "next/dynamic";
export default function Home() {
  // needed to make the Leaflet map render correctly
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  // logic to transform data into the items needed to pass to the map
  return (
    <main>
      <div id="map">
        <MapWithNoSSR />
      </div>
    </main>

  );
}
