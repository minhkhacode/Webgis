import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

const ZoomLevelDisplay = () => {
    const map = useMap();
    const [zoomLevel, setZoomLevel] = useState(map.getZoom());

    useEffect(() => {
        const updateZoomLevel = () => {
            setZoomLevel(map.getZoom());
        };

        map.on('zoomend', updateZoomLevel);

        return () => {
            map.off('zoomend', updateZoomLevel);
        };
    }, [map]);

    return (
        <div className="absolute top-[18%] left-[1%] bg-white p-2 rounded-lg shadow-md z-[10000] ">
            <span className="font-bold">Zoom Level: {zoomLevel}</span>
        </div>
    );
};

export default ZoomLevelDisplay;
