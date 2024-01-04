import React from "react";
import Mapbox3DExampleWithPolygonAndMarkers from "./components/Mapbox";

const center = [-74.0066, 40.7135];
const polygonCoordinatesArray = [
  [
    [-74.007, 40.7133],
    [-74.006, 40.7133],
    [-74.006, 40.7143],
    [-74.007, 40.7143],
    [-74.007, 40.7133],
  ],
  [
    [-74.006, 40.7128],
    [-74.005, 40.7128],
    [-74.005, 40.7138],
    [-74.006, 40.7138],
    [-74.006, 40.7128],
  ],
];
const markerCoordinates = [
  { coordinates: [-74.0066, 40.7135], image: "/police-car.png" },
  { coordinates: [-74.007, 40.7145], image: "/ambulance.png" },
  // Add more marker data as needed
];

function App() {
  return (
    <>
      <Mapbox3DExampleWithPolygonAndMarkers
        center={center}
        polygonCoordinatesArray={polygonCoordinatesArray}
        markerCoordinates={markerCoordinates}
      />
    </>
  );
}

export default App;
