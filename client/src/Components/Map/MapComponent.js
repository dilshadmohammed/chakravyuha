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
<MapContainer>
 <Routing/>
</MapContainer>
      
    </div>
  );
}

export default MapComponent;
