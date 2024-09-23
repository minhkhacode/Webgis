import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';
import 'leaflet-minimap';

import MiniMapControl from './MiniMap';

const MapShapeFile = ({ geoJsonData }) => {
    const onEachTypeLandUse = (TypeLandUse, layer) => {
        const typeLand = TypeLandUse.properties.Type;
        layer.bindPopup(typeLand, {
            maxWidth: 300,
            closeButton: true,
            autoClose: true,
            closeOnClick: true,
        });
        layer.on({
            click: (event) => {
                event.target.setStyle({
                    fillColor: 'green',
                    color: 'white',
                });
            },
        });
    };

    const CountryStyle = {
        fillColor: 'red',
        fillOpacity: '0.1',
        color: '#3c2a20',
        fontWeight: '200',
    };

    return (
        <MapContainer style={{ height: '600px', width: '100%' }} center={[9.675, 105.9043]} zoom={14}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
            />
            {/* <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}
            {geoJsonData && (
                <GeoJSON style={CountryStyle} data={geoJsonData.features} onEachFeature={onEachTypeLandUse} />
            )}
            <MiniMapControl geoJsonData={geoJsonData.features} />
        </MapContainer>
    );
};

export default MapShapeFile;
