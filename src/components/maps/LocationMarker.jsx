import { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import { FaLocationDot } from 'react-icons/fa6';

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [address, setAddress] = useState('');
    const [showLocation, setShowLocation] = useState(false);

    const map = useMap();

    const icon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    const getAddress = async (lat, lon) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
            );
            setAddress(response.data.display_name);
        } catch (error) {
            console.error('Không thể lấy địa chỉ:', error);
            setAddress('Không thể lấy địa chỉ');
        }
    };

    const handleLocate = () => {
        map.locate().on('locationfound', (e) => {
            const { lat, lng } = e.latlng;
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            getAddress(lat, lng);
            setShowLocation(false);
        });
    };

    useEffect(() => {
        if (showLocation) {
            handleLocate();
        }
    }, [showLocation]);

    return (
        <>
            <button
                onClick={() => setShowLocation(true)}
                className="absolute z-[10000] top-[16%] right-5 flex items-center gap-2 text-2xl p-2 rounded-full bg-white hover:bg-blue-500 transition duration-300 text-gray-600 hover:text-white"
            >
                <FaLocationDot className="transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">Your Location</span>
            </button>

            {position && (
                <Marker position={position} icon={icon}>
                    <Popup>
                        <b>Địa chỉ hiện tại:</b> <br />
                        {address || 'Đang lấy địa chỉ...'}
                    </Popup>
                </Marker>
            )}
        </>
    );
}

export default LocationMarker;
