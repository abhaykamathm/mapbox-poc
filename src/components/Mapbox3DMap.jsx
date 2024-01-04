import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox3DMap = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWJoYXlrYW1hdGgiLCJhIjoiY2xxeXRrNDVtMHJ0NDJqcG5odWRsY3Z2YyJ9.dSht3qpJBEBgb9Zi3uiVIQ";

    const map = new mapboxgl.Map({
      style: "mapbox://styles/mapbox/light-v11",
      center: [-74.0066, 40.7135],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: "map",
      antialias: true,
    });

    map.on("style.load", () => {
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === "symbol" && layer.layout["text-field"]
      ).id;

      map.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      );
    });

    // Clean up the map on component unmount
    return () => map.remove();
  }, []);

  return (
    <div
      id="map"
      style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
    />
  );
};

export default Mapbox3DMap;
