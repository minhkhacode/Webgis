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
        <div className="absolute bottom-5 right-[16rem] bg-white bg-opacity-80 p-2 rounded-lg shadow z-[10000] ">
            <span className="">Zoom Level: {zoomLevel}</span>
        </div>
    );
};

export default ZoomLevelDisplay;
