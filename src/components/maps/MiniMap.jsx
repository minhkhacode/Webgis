import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';
import L from 'leaflet';
import 'leaflet-minimap';
import { useEffect } from 'react';

const MiniMapControl = ({ geoJsonData }) => {
    const map = useMap();

    useEffect(() => {
        const miniMapLayer = new L.TileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
            minZoom: 0,
            maxZoom: 13,
        });

        // Create the minimap control
        const miniMap = new L.Control.MiniMap(miniMapLayer, {
            toggleDisplay: false,
            minimized: false,
            position: 'bottomleft',
        }).addTo(map);

        const geoJSONLayer = L.geoJSON(geoJsonData);
        miniMap._miniMap.addLayer(geoJSONLayer);
        return () => {
            miniMap.remove();
        };
    }, [map, geoJsonData]);

    return null;
};

export default MiniMapControl;
