import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MapComponent() {
    const [geoJsonData, setGeoJsonData] = useState(null);

    useEffect(() => {
        // Replace with your GeoServer API URL
        const geoJsonUrl = 'http://localhost:8082/api';

        // Fetch GeoJSON data from backend
        axios
            .get(geoJsonUrl)
            .then((response) => {
                const geoJson = response.data.data;
                console.log('GeoJSON Data:', geoJson);
                setGeoJsonData(geoJson);
            })
            .catch((error) => {
                console.error('Error fetching GeoJSON from backend:', error);
            });
    }, []);

    return (
        <MapContainer
            center={[9.675, 105.9043]} // Change the coordinates to fit your data
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '600px', width: '100%', zIndex: '0' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
            />

            {/* Conditionally render GeoJSON layer once data is fetched */}
            {geoJsonData && <GeoJSON data={geoJsonData} />}
        </MapContainer>
    );
}

export default MapComponent;
