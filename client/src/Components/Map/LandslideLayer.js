import React, { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';

function LandslideLayer() {
  const [landslideData, setLandslideData] = useState(null);

  useEffect(() => {
    // Simulate an API call to fetch landslide data
    setTimeout(() => {
      setLandslideData({
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-74.0059, 40.7128]
            },
            "properties": {
              "name": "Landslide Spot 1",
              "severity": "Low"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-73.9859, 40.7028]
            },
            "properties": {
              "name": "Landslide Spot 2",
              "severity": "High"
            }
          }
        ]
      });
    }, 1000); // Simulate a delay for data loading (replace with actual API fetch)
  }, []);

  return (
    <>
      {landslideData && landslideData.features.map((feature, index) => (
        <Marker
          key={index}
          position={[
            feature.geometry.coordinates[1], // Latitude
            feature.geometry.coordinates[0], // Longitude
          ]}
        >
          <Popup>{feature.properties.name}</Popup>
        </Marker>
      ))}
    </>
  );
}

export default LandslideLayer;
