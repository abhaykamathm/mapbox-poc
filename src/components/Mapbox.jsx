// Mapbox3DExampleWithPolygonAndMarkers.js
import React, { useEffect, useRef } from "react";
import initializeMap from "../utils/mapInitialization";
import { addBuildingsLayer, addPolygonLayer } from "../utils/mapLayers";
import addMarkers from "../utils/mapMarkers";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

const Mapbox3DExampleWithPolygonAndMarkers = ({
  center,
  polygonCoordinatesArray,
  markerCoordinates,
}) => {
  const mapRef = useRef(null);
  const clickedCoordinates = [];
  const markers = [];
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

      map.on("click", (e) => {
        // Push the clicked coordinates to the array
        clickedCoordinates.push([e.lngLat.lng, e.lngLat.lat]);

        // Add a custom marker where the map is clicked
        const el = document.createElement("div");
        el.className = "marker";
        el.style.width = "5px";
        el.style.height = "5px";
        el.style.backgroundColor = "red";
        el.style.borderRadius = "25px";

        const marker = new mapboxgl.Marker(el)
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .addTo(map);

        // Store the marker for later removal
        markers.push(marker);
      });
    });

    // Store the map instance for later use
    mapRef.current = map;

    // Clean up the map on component unmount
    return () => map.remove();
  }, [center, polygonCoordinatesArray, markerCoordinates]);

  const handleButtonClick = () => {
    console.log("Clicked");
    const map = mapRef.current;

    // Remove all markers
    markers.forEach((marker) => marker.remove());
    markers.length = 0;

    // Check if the polygon source already exists
    if (map.getSource("polygon")) {
      // Update the polygon with the new coordinates
      map.getSource("polygon").setData({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [clickedCoordinates],
        },
      });
    } else {
      // Add the polygon source and layer
      map.addSource("polygon", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [clickedCoordinates],
          },
        },
      });

      map.addLayer({
        id: "polygon",
        type: "fill",
        source: "polygon",
        paint: {
          "fill-color": "#ff0000",
          "fill-opacity": 0.5,
        },
      });
    }
  };

  return (
    <div>
      <div
        id="map"
        style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
      />
      <button onClick={handleButtonClick} style={{ position: "absolute" }}>
        Create Polygon
      </button>
    </div>
  );
};

export default Mapbox3DExampleWithPolygonAndMarkers;
