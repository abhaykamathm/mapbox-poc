// mapInitialization.js
import mapboxgl from "mapbox-gl";

const initializeMap = ({ center }) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWJoYXlrYW1hdGgiLCJhIjoiY2xxeXRrNDVtMHJ0NDJqcG5odWRsY3Z2YyJ9.dSht3qpJBEBgb9Zi3uiVIQ";

  return new mapboxgl.Map({
    style: "mapbox://styles/mapbox/light-v11",
    center: center,
    zoom: 15.5,
    pitch: 45,
    bearing: -17.6,
    container: "map",
    antialias: true,
  });
};

export default initializeMap;
