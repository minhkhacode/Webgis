// MapShapeFile.js
import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';
import 'leaflet-minimap';
import { AttributionControl, MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import ResetCenterButton from './ResetCenterButton';
import CustomZoomControl from './CustomZoomControl';
import UpdateMapCenter from './UpdateMapCenter';
import MapLayers from './MapLayers';
import ZoomLevelDisplay from './ZoomLevelDisplay';

function MapShapeFile({ getJsonDataList, type }) {
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
        googleMap: 'r',
        satelliteMap: 's',
        streetMap: 'y',
    };

    const checkMapType = (type) => MapTypeList[type];

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
            <ResetCenterButton center={mapCenter} />
            <UpdateMapCenter center={mapCenter} />
            <ZoomLevelDisplay />
            <CustomZoomControl />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={`https://mt1.google.com/vt/lyrs=${checkMapType(type)}&x={x}&y={y}&z={z}`}
            />
            <MapLayers getJsonDataList={getJsonDataList} styles={CountryStyleList} />
        </MapContainer>
    );
}

export default MapShapeFile;
