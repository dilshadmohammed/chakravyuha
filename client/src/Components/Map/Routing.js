import React, { useState, useEffect } from 'react';
import { MapContainer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { overlayLayer } from './Map';
import { Select } from '@chakra-ui/react';

function Routing() {
  const map = useMap();
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [selectedStartPlace, setSelectedStartPlace] = useState(null);
  const [selectedEndPlace, setSelectedEndPlace] = useState(null);
  const [geoJSONLayer, setGeoJSONLayer] = useState(null);

  overlayLayer.addTo(map);

  // Define coordinates for places in Kerala
  const placeCoordinates = {
    'Trivandrum': { lat: 8.5241, lng: 76.9366 },
    'Kochi': { lat: 9.9312, lng: 76.2673 },
    'Kozhikode': { lat: 11.2588, lng: 75.7804 },
    'Malappuram': { lat: 11.0732, lng: 76.0742 },
    'Wayanad': { lat: 11.6850, lng: 76.1300 },
    'Palakkad': { lat: 10.7725, lng: 76.6548 },
    'Kannur': { lat: 11.8745, lng: 75.3704 },
    'Kondotty': { lat: 11.1342, lng: 75.9799 },
    'Manjeri': { lat: 11.1202, lng: 76.1191 },
    'Kollam': { lat: 8.8932, lng: 76.6141 },
    // Add coordinates for other places in Kerala
  };

  // Load GeoJSON data for the flood-affected area
  const geoJSONData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": { "name": "Kochi Flood Area" },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [76.243, 9.900],
              [76.243, 9.980],
              [76.320, 9.980],
              [76.320, 9.900],
              [76.243, 9.900]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": { "name": "Ponnani Flood Area" },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [75.925, 10.782],
              [75.925, 10.860],
              [76.004, 10.860],
              [76.004, 10.782],
              [75.925, 10.782]
            ]
          ]
        }
      }
    ]
  }
  
  
  const handleRouting = () => {
    if (startLocation && endLocation && geoJSONLayer) {
      const waypoints = [
        L.latLng(startLocation.lat, startLocation.lng),
        L.latLng(endLocation.lat, endLocation.lng),
      ];
  
      const router = L.Routing.control({
        waypoints,
        routeWhileDragging: true,
        routeCallback: function (route) {
          const routeSegments = route.routes[0].coordinates;
          const excludedSegments = [];
  
          for (const feature of geoJSONLayer.getLayers()) {
            if (feature.feature.properties.name === "Kochi Flood Area" || feature.feature.properties.name === "Ponnani Flood Area") {
              const coordinates = feature.getLatLngs()[0];
              const polygon = L.polygon(coordinates);
  
              for (const segment of routeSegments) {
                const segmentPoint = L.latLng(segment[1], segment[0]);
                if (polygon.getBounds().contains(segmentPoint)) {
                  excludedSegments.push(segment);
                }
              }
            }
          }
  
          if (excludedSegments.length > 0) {
            // Slightly move the end waypoint to trigger route recalculation
            waypoints[1] = L.latLng(endLocation.lat, endLocation.lng + 0.001);
  
            const filteredRoute = {
              ...route,
              routes: [
                {
                  ...route.routes[0],
                  coordinates: routeSegments.filter(segment => !excludedSegments.includes(segment))
                }
              ]
            };
            return filteredRoute;
          }
  
          return route;
        },
      });
  
      router.addTo(map);
    }
  };
  
  
  
  
  
  

  // Load GeoJSON data for the flood-affected area when the component mounts
  useEffect(() => {
    const geoJSON = L.geoJSON(geoJSONData, {
      style: { color: 'red' }, // Customize the style of the GeoJSON layer
    }).addTo(map);

    setGeoJSONLayer(geoJSON);

    return () => {
      // Clean up when the component unmounts
      map.removeLayer(geoJSON);
    };
  }, [map]);

  const handleSelectStartPlace = (event) => {
    const selectedPlace = event.target.value;
    setSelectedStartPlace(selectedPlace);

    if (placeCoordinates[selectedPlace]) {
      setStartLocation(placeCoordinates[selectedPlace]);
    }
  };

  const handleSelectEndPlace = (event) => {
    const selectedPlace = event.target.value;
    setSelectedEndPlace(selectedPlace);

    if (placeCoordinates[selectedPlace]) {
      setEndLocation(placeCoordinates[selectedPlace]);
    }
  };

  return (
    <div style={{ height: '500px' }}>
      <Select value={selectedStartPlace} placeholder='Select a place' onChange={handleSelectStartPlace}>
        {Object.keys(placeCoordinates).map((place) => (
          <option key={place} value={place}>
            {place}
          </option>
        ))}
      </Select>
      <Select value={selectedEndPlace} placeholder='Select a place' onChange={handleSelectEndPlace}>
        {Object.keys(placeCoordinates).map((place) => (
          <option key={place} value={place}>
            {place}
          </option>
        ))}
      </Select>
      <button onClick={handleRouting}>Calculate Route</button>
    </div>
  );
}

export default Routing;
