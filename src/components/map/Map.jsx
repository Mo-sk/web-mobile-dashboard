import './Map.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import iconMarker from './markers';
import React, {Component} from "react";

function MyComponent({saveMarkers}) {
    const map = useMapEvents({
        click: (e) => {
            const {lat, lng} = e.latlng;
            L.marker([lat, lng], {iconMarker}).addTo(map);
            saveMarkers([lat, lng]);
        }
    });
    return null;
}

export default class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [[40.7, -74]],
            data: []
        };
    }

    saveMarkers = (newMarkerCoords) => {
        const data = [...this.state.data, newMarkerCoords];
        this.setState((prevState) => ({...prevState, data}));
    };

    render() {
        return (
            <MapContainer className="Map" center={[47.203, -1.537]} zoom={13} scrollWheelZoom={true} style={{height: "90vh", width: "100%"}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyComponent saveMarkers={this.saveMarkers}/>
            <Marker position={[47.203, -1.537]} icon={iconMarker}>
                <Popup>
                    Ynov Nantes<br /> 20 Bd Général de Gaulle, 44200 Nantes.
                </Popup>
            </Marker>
        
            <Marker position={[47.212, -1.554]} icon={iconMarker}>
                <Popup>
                    AUGURIA<br /> 6 Allee Duguay Trouin, 44000 Nantes.
                </Popup>
            </Marker>
        
            </MapContainer>
          );
    }
}