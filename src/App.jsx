import React from "react";
import MapboxMap from "./components/MapboxMap";
import Mapbox3DMap from "./components/Mapbox3DMap";
import Mapbox3DWithPolygon from "./components/Mapbox3DWithPolygon";
import Mapbox3DExampleWithPolygonAndMarkers from "./components/Mapbox3DExampleWithPolygonAndMarkers ";

function App() {
  return (
    <>
      {/* <MapboxMap /> */}
      {/* <Mapbox3DMap /> */}
      {/* <Mapbox3DWithPolygon /> */}
      <Mapbox3DExampleWithPolygonAndMarkers />
    </>
  );
}

export default App;
