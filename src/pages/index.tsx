import dynamic from "next/dynamic";
import CongrazBox from "../components/congrazBox/CongrazBox";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/map/Map"), {
    ssr: false,
  });



  return (
    <main>
      <div>
        <div id="map">
          <MapWithNoSSR />
        </div>
      </div>
    </main>

  );
}
