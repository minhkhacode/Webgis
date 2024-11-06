import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet';

function MapHoverCoordinates() {
    const map = useMap();
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { lat, lng } = event.latlng;
            setCoordinates({ lat, lng });
        };

        map.on('mousemove', handleMouseMove);

        return () => {
            map.off('mousemove', handleMouseMove);
        };
    }, [map]);

    return (
        <div className="absolute bottom-5 right-5 flex gap-2 bg-white bg-opacity-80 p-2 rounded-lg shadow z-[10000]">
            <p>Latitude: {coordinates.lat?.toFixed(5) || 'N/A'}</p>
            <p>Longitude: {coordinates.lng?.toFixed(5) || 'N/A'}</p>
        </div>
    );
}

export default MapHoverCoordinates;
