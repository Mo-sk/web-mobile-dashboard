import './Map.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import iconMarker from './markers';

function Map() {
    const ynov = [47.203, -1.537];
    const alternance = [47.212, -1.554];

  return (
    <MapContainer center={[47.203, -1.537]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={ynov} icon={iconMarker}>
        <Popup>
            Ynov Nantes<br /> 20 Bd Général de Gaulle, 44200 Nantes.
        </Popup>
    </Marker>

    <Marker position={alternance} icon={iconMarker}>
        <Popup>
            AUGURIA<br /> 6 Allee Duguay Trouin, 44000 Nantes.
        </Popup>
    </Marker>

    </MapContainer>
  );
}

export default Map;