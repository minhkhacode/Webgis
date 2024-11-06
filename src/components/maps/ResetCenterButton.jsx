import { useState, useRef, useEffect } from 'react';
import { useMap } from 'react-leaflet';

export default function ResetCenterButton({ center }) {
    const map = useMap();
    const [isResetting, setIsResetting] = useState(false);
    const timeoutRef = useRef(null);
    const [currentCenter, setCurrentCenter] = useState(center);

    useEffect(() => {
        const updateCenter = () => {
            setCurrentCenter([map.getCenter().lat, map.getCenter().lng]);
        };

        map.on('moveend', updateCenter);

        return () => {
            map.off('moveend', updateCenter);
        };
    }, [map]);

    const handleReset = () => {
        if (isResetting) return;
        setIsResetting(true);
        map.setView(center);

        timeoutRef.current = setTimeout(() => {
            setIsResetting(false);
        }, 1000);
    };

    const isCloseToCenter = (currentCenter, center, tolerance = 0.0001) => {
        return Math.abs(currentCenter[0] - center[0]) < tolerance && Math.abs(currentCenter[1] - center[1]) < tolerance;
    };

    const isAtCenter = isCloseToCenter(currentCenter, center);

    if (isAtCenter) return null;

    return (
        <button
            className={`bg-customBlue text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 absolute bottom-5 left-5 z-[10000] opacity-[0.8] duration-300 ${
                isResetting ? 'opacity-50' : 'opacity-100'
            }`}
            onClick={handleReset}
            disabled={isResetting}
        >
            Reset Center
        </button>
    );
}
