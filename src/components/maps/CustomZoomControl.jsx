import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

export default function CustomZoomControl() {
    const map = useMap();

    useEffect(() => {
        const zoomControl = L.control.zoom({
            position: 'bottomright',
        });
        zoomControl.addTo(map);

        return () => map.removeControl(zoomControl);
    }, [map]);

    return null;
}
