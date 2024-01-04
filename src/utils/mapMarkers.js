// mapMarkers.js
const addMarkers = (map, markerDataArray) => {
  markerDataArray.forEach((markerData, index) => {
    const { coordinates, image } = markerData;

    map.loadImage(image, (error, img) => {
      if (error) throw error;

      map.addImage(`custom-marker-${index}`, img);

      // Add marker coordinates
      map.addSource(`marker-${index}`, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinates,
              },
            },
            // Add more features as needed
          ],
        },
      });

      map.addLayer({
        id: `marker-${index}`,
        type: "symbol",
        source: `marker-${index}`,
        layout: {
          "icon-image": `custom-marker-${index}`,
          "icon-allow-overlap": true,
          "icon-size": 0.5,
        },
        paint: {},
      });
    });
  });
};

export default addMarkers;
