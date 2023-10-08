import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const FloodLayer = () => {
  // Define your GeoJSON data
  const geoJSONData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-74.0059, 40.7128],
              [-74.0059, 40.7228],
              [-73.9959, 40.7228],
              [-73.9959, 40.7128],
              [-74.0059, 40.7128]
            ]
          ]
        },
        "properties": {
          "name": "Flood Area 1",
          "severity": "High"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-73.9959, 40.7028],
              [-73.9959, 40.7128],
              [-73.9859, 40.7128],
              [-73.9859, 40.7028],
              [-73.9959, 40.7028]
            ]
          ]
        },
        "properties": {
          "name": "Flood Area 2",
          "severity": "Medium"
        }
      }
    ]
  };

  // Define a style function for the GeoJSON features
  const getStyle = (feature) => {
    const severity = feature.properties.severity;
    return {
      fillColor: severity === 'High' ? 'red' : 'yellow',
      weight: 2,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7
    };
  };

  return (
    <MapContainer
      center={[40.7128, -74.0059]}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add the GeoJSON layer */}
      <GeoJSON data={geoJSONData} style={getStyle} />
    </MapContainer>
  );
};

export default FloodLayer;
