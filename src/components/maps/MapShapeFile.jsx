import 'leaflet-minimap';
import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';
import { AttributionControl, MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import MapLayers from './MapLayers';
import ResetCenterButton from './ResetCenterButton';
import CustomZoomControl from './CustomZoomControl';
import UpdateMapCenter from './UpdateMapCenter';
import ZoomLevelDisplay from './ZoomLevelDisplay';
import MapHoverCoordinates from './MapHoverCoordinates';
import MapResizeHandler from './MapResizeHandler';

function MapShapeFile({ getJsonDataList, type, isSidebarOpen }) {
    const { area } = useSelector((state) => state.inputPrediction);

    const CountryStyleList = [
        { fillColor: 'pink', fillOpacity: '0.5', color: 'red', fontWeight: '200' },
        { fillColor: 'yellow', fillOpacity: '0.5', color: 'green', fontWeight: '200' },
        { fillColor: 'purple', fillOpacity: '0.5', color: 'blue', fontWeight: '200' },
        { fillColor: 'green', fillOpacity: '0.1', color: 'blue', fontWeight: '200' },
        { fillColor: 'grey', fillOpacity: '0.1', color: 'blue', fontWeight: '200' },
        { fillColor: 'purple', fillOpacity: '0.1', color: 'blue', fontWeight: '200' },
    ];

    const MapTypeList = {
        openStreetMap: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        esriWorldImagery:
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        esriWorldStreetMap:
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        cartoDB: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    };

    const checkMapType = (type) => MapTypeList[type] || MapTypeList.esriWorldImagery;

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    const currentDate = getCurrentDate();

    const defaultCenter = [9.675, 105.9043];
    const mapCenter = area ? [area.latitude, area.longitude] : defaultCenter;

    return (
        <MapContainer
            style={{ height: '100vh', width: '100%' }}
            center={mapCenter}
            zoom={14}
            attributionControl={false}
            zoomControl={false}
        >
            <ZoomLevelDisplay />
            <CustomZoomControl />
            <UpdateMapCenter center={mapCenter} />
            <ResetCenterButton center={mapCenter} />
            <MapHoverCoordinates />
            <MapResizeHandler isSidebarOpen={isSidebarOpen} />
            <TileLayer
                attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Map tiles by <a href="https://stamen.com">Stamen Design</a>'
                url={checkMapType(type)}
                time={currentDate}
            />

            <MapLayers getJsonDataList={getJsonDataList} styles={CountryStyleList} />
        </MapContainer>
    );
}

export default MapShapeFile;
