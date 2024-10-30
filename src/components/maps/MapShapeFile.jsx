import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';
import 'leaflet-minimap';
import { MapContainer, GeoJSON, TileLayer, useMap } from 'react-leaflet';
import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'leaflet-toolbar/dist/leaflet.toolbar.css'; // CSS for toolbar
import 'leaflet-toolbar'; // Import the toolbar functionality

const ResetCenterButton = ({ center }) => {
    const map = useMap();
    const [isResetting, setIsResetting] = useState(false);
    const timeoutRef = useRef(null);

    const handleReset = () => {
        if (isResetting) return;
        setIsResetting(true);
        map.setView(center);

        timeoutRef.current = setTimeout(() => {
            setIsResetting(false);
        }, 1000);
    };

    return (
        <button
            className="bg-customBlue text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 absolute bottom-5 left-5 z-[401]"
            onClick={handleReset}
            disabled={isResetting}
        >
            Reset Center
        </button>
    );
};

const UpdateMapCenter = ({ center }) => {
    const map = useMap();

    useEffect(() => {
        if (center) {
            map.setView(center, map.getZoom());
        }
    }, [center, map]);

    return null;
};

function MapShapeFile({ getJsonDataList, type }) {
    const { area } = useSelector((state) => state.inputPrediction);

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
    ];

    const MapTypeList = {
        googleMap: 'r',
        satelliteMap: 's',
        streetMap: 'y',
    };

    const checkMapType = (type) => MapTypeList[type];

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
        <>
            <MapContainer style={{ height: '600px', width: '100%' }} center={mapCenter} zoom={14}>
                <ResetCenterButton center={mapCenter} />
                <UpdateMapCenter center={mapCenter} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={`https://mt1.google.com/vt/lyrs=${checkMapType(type)}&x={x}&y={y}&z={z}`}
                />

                {getJsonDataList.map((item, index) =>
                    item ? (
                        <GeoJSON
                            style={CountryStyleList[index]}
                            data={item.features}
                            onEachFeature={onEachTypeLandUse}
                            key={index}
                        />
                    ) : (
                        <></>
                    ),
                )}
            </MapContainer>
        </>
    );
}

export default MapShapeFile;
