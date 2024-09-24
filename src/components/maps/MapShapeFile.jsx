/* eslint-disable no-unreachable */
/* eslint-disable array-callback-return */
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';
import 'leaflet-minimap';

import MiniMapControl from './MiniMap';

const MapShapeFile = ({ getJsonDataList }) => {
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
                    color: 'white',
                });
            },
            clickOutSide: (event) => {
                event.target.setStyle({
                    fillColor: 'red',
                    fillOpacity: '0.1',
                    color: '#3c2a20',
                    fontWeight: '200',
                });
            },
        });
    };

    // const CountryStyleFirst = {
    //     fillColor: 'red',
    //     fillOpacity: '0.1',
    //     color: '#3c2a20',
    //     fontWeight: '200',
    // };

    // const CountryStyleSecond = {
    //     fillColor: 'blue',
    //     fillOpacity: '0.25',
    //     color: '#3c2a20',
    //     fontWeight: '200',
    // };

    // const CountryStyleThird = {
    //     fillColor: 'yellow',
    //     fillOpacity: '0.5',
    //     color: '#3c2a20',
    //     fontWeight: '200',
    // };

    const CountryStyleList = [
        {
            fillColor: 'black',
            fillOpacity: '0.25',
            color: '#3c2a20',
            fontWeight: '200',
        },
        {
            fillColor: 'yellow',
            fillOpacity: '0.5',
            color: '#3c2a20',
            fontWeight: '200',
        },
        {
            fillColor: 'red',
            fillOpacity: '0.1',
            color: '#3c2a20',
            fontWeight: '200',
        },
    ];

    return (
        <MapContainer style={{ height: '600px', width: '100%' }} center={[9.675, 105.9043]} zoom={14}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
            />

            {/* {geoJsonData && (
                <GeoJSON style={CountryStyleFirst} data={geoJsonData.features} onEachFeature={onEachTypeLandUse} />
            )}
            {geoJsonData2 && (
                <GeoJSON style={CountryStyleSecond} data={geoJsonData2.features} onEachFeature={onEachTypeLandUse} />
            )}
            {geoJsonData3 && (
                <GeoJSON style={CountryStyleThird} data={geoJsonData3.features} onEachFeature={onEachTypeLandUse} />
            )} */}

            {getJsonDataList.map((item, index) => {
                return (
                    <GeoJSON
                        style={CountryStyleList[index]}
                        data={item.features}
                        onEachFeature={onEachTypeLandUse}
                        key={index}
                    />
                );
            })}

            {getJsonDataList.map((item, index) => {
                return <MiniMapControl geoJsonData={item.features} key={index} />;
            })}
        </MapContainer>
    );
};

export default MapShapeFile;
