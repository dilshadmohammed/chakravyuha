import React from 'react';
import { MapContainer} from 'react-leaflet';
import './MapComponent.css'
import Routing from './Routing';
import FloodLayer from './FloodLayer';
import LandslideLayer from './LandslideLayer';
import 'leaflet/dist/leaflet.css';


function MapComponent() {
  return (
    <div className='map-box'>
      <h2>ReliefLink SafeWays™️</h2>
      <p>Find the safest and fastest route to take you where you want to go.</p>
<MapContainer>
 <Routing/>
</MapContainer>
      
    </div>
  );
}

export default MapComponent;
