import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ScrollControlMap = () => {
    const map = useMap();
    const [geoData, setGeoData] = useState([
        {
            type: 'LineString',
            coordinates: [
                [-100, 40],
                [-105, 45],
                [-110, 55],
            ],
        },
        {
            type: 'LineString',
            coordinates: [
                [-105, 40],
                [-110, 45],
                [-115, 55],
            ],
        },
    ]);

    useEffect(() => {
        const handleScroll = (e) => {
            if (map && map.getContainer().contains(e.target)) {
                map.scrollWheelZoom.enable();
            } else {
                map.scrollWheelZoom.disable();
            }
        };

        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, [map]);

    return null;
};

const MapComponent = () => {
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '600px', width: '100%', zIndex: '0' }}
        >
            <ScrollControlMap />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* {geoData && <GeoJSON data={geoData} />} */}
            {/* <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}
        </MapContainer>
    );
};

export default MapComponent;
