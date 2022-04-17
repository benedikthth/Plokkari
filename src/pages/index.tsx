import dynamic from "next/dynamic";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/map/Map"), {
    ssr: false,
  });
  return (
    <main>
      <div id="map">
        <MapWithNoSSR />
      </div>
    </main>

  );
}
