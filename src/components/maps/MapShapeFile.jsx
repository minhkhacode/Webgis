/* eslint-disable no-unreachable */
/* eslint-disable array-callback-return */
import { useRef } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';
import 'leaflet-minimap';
// import Button from '../Button';

import MiniMapControl from './MiniMap';

function MapShapeFile({ getJsonDataList }, removeLayerFnc) {
    const layerRefs = useRef([]);
    // const [dataGeoJsonTemp, setDataGeoJonTemp] = useState('');

    // useEffect(() => {
    //     fetch('/ThuanHoa2022GeoJson.json').then((data) => setDataGeoJonTemp(data.json()));
    //     console.log('data', dataGeoJsonTemp);
    // }, []);

    const removeLayer = (index) => {
        if (layerRefs.current[index]) {
            layerRefs.current[index].remove(); // Remove the layer with specific index
        }
    };

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
        {
            fillColor: 'green',
            fillOpacity: '0.1',
            color: '#3c2a20',
            fontWeight: '200',
        },
        {
            fillColor: 'grey',
            fillOpacity: '0.1',
            color: '#3c2a20',
            fontWeight: '200',
        },
        {
            fillColor: 'purple',
            fillOpacity: '0.1',
            color: '#3c2a20',
            fontWeight: '200',
        },
    ];

    // console.log('getJsonDataList: ', getJsonDataList);

    return (
        <>
            <MapContainer style={{ height: '600px', width: '100%' }} center={[9.675, 105.9043]} zoom={14}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
                />
                {getJsonDataList.map((item, index) => {
                    return (
                        <GeoJSON
                            style={CountryStyleList[index]}
                            data={item.features}
                            onEachFeature={onEachTypeLandUse}
                            key={index}
                            ref={(el) => (layerRefs.current[index] = el)}
                        />
                    );
                })}

                <MiniMapControl geoJsonData={getJsonDataList} />
                {getJsonDataList &&
                    getJsonDataList.map((item, index) => {
                        return (
                            <div
                                className="bg-gray"
                                key={index}
                                content={item.value}
                                onClick={() => {
                                    removeLayer(index);
                                }}
                            ></div>
                        );
                    })}
            </MapContainer>
        </>
    );
}

export default MapShapeFile;
