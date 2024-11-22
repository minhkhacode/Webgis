import 'leaflet-minimap';
import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import 'leaflet-toolbar/dist/leaflet.toolbar.css'; // CSS for toolbar
import 'leaflet-toolbar'; // Import the toolbar functionality
=======
import MapLayers from './MapLayers';
import ResetCenterButton from './ResetCenterButton';
import CustomZoomControl from './CustomZoomControl';
import UpdateMapCenter from './UpdateMapCenter';
import MapResizeHandler from './MapResizeHandler';
import MapInfoDisplay from './MapInfoDisplay';
import LocationMarker from './LocationMarker';
import { selectMapType, selectMapTypeList, selectSidebarStatus } from '../../features/setting/settingSlice.jsx';
>>>>>>> main

function MapShapeFile({ getJsonDataList }) {
    const { area } = useSelector((state) => state.inputPrediction);
<<<<<<< HEAD

    const onEachTypeLandUse = (TypeLandUse, layer) => {
        const typeLand = TypeLandUse.properties.Type;
        layer.bindPopup(typeLand, {
            maxWidth: 300,
            closeButton: true,
            autoClose: true,
            closeOnClick: true,
        });
        layer.on({
            click: (event) => {
                event.target.setStyle({
                    fillColor: 'green',
                    color: '#515FDE',
                });
            },
            clickOutSide: (event) => {
                event.target.setStyle({
                    fillColor: 'red',
                    fillOpacity: '0.1',
                    color: '#515FDE',
                    fontWeight: '200',
                });
            },
        });
    };

    const CountryStyleList = [
        {
            fillColor: '#66586B',
            fillOpacity: '0.3',
            color: '#383539',
            fontWeight: '50',
        },
        {
            fillColor: '#D58BFF',
            fillOpacity: '0.15',
            color: '#D58BFF',
            fontWeight: '50',
        },
        {
            fillColor: '#66586B',
            fillOpacity: '0.15',
            color: '',
            fontWeight: '50',
        },
        {
            fillColor: 'green',
            fillOpacity: '0.15',
            color: 'blue',
            fontWeight: '50',
        },
        {
            fillColor: 'grey',
            fillOpacity: '0.1',
            color: 'blue',
            fontWeight: '50',
        },
        {
            fillColor: 'purple',
            fillOpacity: '0.1',
            color: 'blue',
            fontWeight: '50',
        },
=======
    const mapType = useSelector(selectMapType);
    const mapTypeList = useSelector(selectMapTypeList);
    const isSidebarOpen = useSelector(selectSidebarStatus);

    const CountryStyleList = [
        { fillColor: 'pink', fillOpacity: '0.5', color: 'red', fontWeight: '200' },
        { fillColor: 'yellow', fillOpacity: '0.5', color: 'green', fontWeight: '200' },
        { fillColor: 'purple', fillOpacity: '0.5', color: 'blue', fontWeight: '200' },
        { fillColor: 'green', fillOpacity: '0.1', color: 'blue', fontWeight: '200' },
        { fillColor: 'grey', fillOpacity: '0.1', color: 'blue', fontWeight: '200' },
        { fillColor: 'purple', fillOpacity: '0.1', color: 'blue', fontWeight: '200' },
>>>>>>> main
    ];

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

    // useEffect(() => {
    //     const L = window.L; // Ensure Leaflet is available globally

    //     // Add toolbar with controls on map load
    //     const map = L.map('map').setView([9.675, 105.9043], 12);
    //     new L.ToolbarControl({
    //         position: 'topright',
    //         actions: [
    //             L.ToolbarAction.extend({
    //                 options: { toolbarIcon: { className: 'leaflet-zoom-in', tooltip: 'Zoom In' } },
    //                 addHooks: function () {
    //                     map.zoomIn();
    //                 },
    //             }),
    //             L.ToolbarAction.extend({
    //                 options: { toolbarIcon: { className: 'leaflet-zoom-out', tooltip: 'Zoom Out' } },
    //                 addHooks: function () {
    //                     map.zoomOut();
    //                 },
    //             }),
    //         ],
    //     }).addTo(map);

    //     return () => map.remove();
    // }, []);

    return (
        <MapContainer
            style={{ height: '100vh', width: '100%' }}
            center={mapCenter}
            zoom={14}
            attributionControl={false}
            zoomControl={false}
        >
            <CustomZoomControl />
            <UpdateMapCenter center={mapCenter} />
            <ResetCenterButton center={mapCenter} />
            <MapInfoDisplay />
            <MapResizeHandler isSidebarOpen={isSidebarOpen} />
            <TileLayer
                attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Map tiles by <a href="https://stamen.com">Stamen Design</a>'
                url={mapTypeList[mapType].url}
                time={currentDate}
            />
            <MapLayers getJsonDataList={getJsonDataList} styles={CountryStyleList} />
            <LocationMarker />
        </MapContainer>
    );
}

export default MapShapeFile;
