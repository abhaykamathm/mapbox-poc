// mapLayers.js
const addBuildingsLayer = (map) => {
  map.addLayer({
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
  });
};

// mapLayers.js
const addPolygonLayer = (map, coordinates, index) => {
  map.addSource(`polygon-${index}`, {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [coordinates],
      },
    },
  });

  map.addLayer({
    id: `polygon-${index}`,
    type: "fill",
    source: `polygon-${index}`,
    paint: {
      "fill-color": "#ff0000",
      "fill-opacity": 0.5,
    },
  });
};

export { addBuildingsLayer, addPolygonLayer };
