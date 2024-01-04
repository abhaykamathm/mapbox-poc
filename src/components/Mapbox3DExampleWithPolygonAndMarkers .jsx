// Mapbox3DExampleWithPolygonAndMarkers.js
import React, { useEffect } from "react";
import initializeMap from "../utils/mapInitialization";
import { addBuildingsLayer, addPolygonLayer } from "../utils/mapLayers";
import addMarkers from "../utils/mapMarkers";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox3DExampleWithPolygonAndMarkers = ({
  center,
  polygonCoordinatesArray,
  markerCoordinates,
}) => {
  useEffect(() => {
    const map = initializeMap({ center });

    map.on("style.load", () => {
      addBuildingsLayer(map);

      // Add multiple polygons
      if (polygonCoordinatesArray && polygonCoordinatesArray.length > 0) {
        polygonCoordinatesArray.forEach((polygonCoordinates, index) => {
          addPolygonLayer(map, polygonCoordinates, `polygon${index}`);
        });
      }

      // Add multiple markers
      if (markerCoordinates && markerCoordinates.length > 0) {
        addMarkers(map, markerCoordinates);
      }
    });

    // Clean up the map on component unmount
    return () => map.remove();
  }, [center, polygonCoordinatesArray, markerCoordinates]);

  return (
    <div
      id="map"
      style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
    />
  );
};

export default Mapbox3DExampleWithPolygonAndMarkers;
