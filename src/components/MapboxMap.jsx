import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const MapboxMap = () => {
  useEffect(() => {
    // Replace 'your-access-token' with your Mapbox access token
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWJoYXlrYW1hdGgiLCJhIjoiY2xxeXRrNDVtMHJ0NDJqcG5odWRsY3Z2YyJ9.dSht3qpJBEBgb9Zi3uiVIQ";

    const map = new mapboxgl.Map({
      container: "map-container", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-115.139832, 36.169941], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });

    // Clean up the map on component unmount
    return () => map.remove();
  }, []);

  return <div id="map-container" style={{ width: "100%", height: "400px" }} />;
};

export default MapboxMap;
