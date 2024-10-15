import { useDispatch, useSelector } from 'react-redux';
import { fetchLayerGeoJson } from '../app/action';
import { useEffect, useState } from 'react';
import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet';
import axios from 'axios';
import { toggleNN, togglePNN, toggleTQ } from '../features/test/testSlice';
import MapShapeFile from '../components/maps/MapShapeFile';
import { CRS } from 'leaflet';

function Test() {
    const dispatch = useDispatch();
    const { layer, compareLayer } = useSelector((state) => state.layer);

    // const [geoJsonData, setGeoJsonData] = useState(null);
    console.log(CRS.EPSG4326);

    useEffect(() => {
        dispatch(fetchLayerGeoJson());
    }, []);
    // const [test, setTest] = useState([]);
    // useEffect(() => {
    //     const fetchTest = async () => {
    //         const response = await axios
    //             .get(`/geoserver/wfs`, {
    //                 params: {
    //                     service: 'WFS',
    //                     version: '1.0.0',
    //                     request: 'GetFeature',
    //                     typeName: 'minhkha:thuanhoa_tkdd2022_crs84',
    //                     outputFormat: 'application/json',
    //                 },
    //             })
    //             .then((data) => {
    //                 console.log(data);
    //                 setTest({ ...data.data });
    //             });
    //     };
    //     fetchTest();
    // }, []);

    const onEachTypeLandUse = (TypeLandUse, layer) => {
        const typeLand = TypeLandUse.properties.kh2003;
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

    // const [NN, setNN] = useState([]);
    // const [PNN, setPNN] = useState(null);
    // const [TQ, setTQ] = useState(null);

    // useEffect(() => {
    //     axios.get('/thuanhoa_tkdd2022.geojson').then((data) => {
    //         setNN(data.data);
    //         dispatch(fetchLayerGeoJson());
    //         dispatch(toggleNN({ ...data.data }));
    //     });

    //     axios.get('/PNN.geojson').then((data) => {
    //         setPNN(data.data);
    //     });

    //     axios.get('/TQ.geojson').then((data) => {
    //         setTQ(data.data);
    //     });
    // }, []);

    // const handleToggleNN = () => {
    //     dispatch(toggleNN({ ...NN }));
    //     console.log(compareLayer);
    // };

    // const handleTogglePNN = () => {
    //     dispatch(togglePNN({ ...PNN }));
    //     console.log(compareLayer);
    // };

    // const handleToggleTQ = () => {
    //     dispatch(toggleTQ({ ...TQ }));
    //     console.log(compareLayer);
    // };

    return (
        <div>
            {/* <input type="checkbox" onChange={handleToggleNN} />
            <input type="checkbox" onChange={handleTogglePNN} />
            <input type="checkbox" onChange={handleToggleTQ} />
            <MapShapeFile getJsonDataList={Object.values(compareLayer)} /> */}
            <MapContainer
                // crs={CRS.EPSG4326}
                center={[9.680258, 105.905196]}
                zoom={14}
                scrollWheelZoom={true}
                style={{ height: '100vh', width: '100%', zIndex: '0' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CartoDB</a>'
                    url="https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                {/* {compareLayer.NN && <GeoJSON key="my-geojson" data={compareLayer.NN.features} />} */}
                {layer.features && (
                    <GeoJSON
                        key="my-geojson"
                        style={{
                            fillColor: '#95c9dc',
                            fillOpacity: '0.2',
                            color: '#95c9dc',
                            fontWeight: '100',
                        }}
                        onEachFeature={onEachTypeLandUse}
                        data={layer.features}
                    />
                )}
                {/* {test.features && (
                    <GeoJSON
                        key="my-testgeojson"
                        style={{
                            fillColor: 'red',
                            fillOpacity: '0.5',
                            color: '#3c2a20',
                            fontWeight: '200',
                        }}
                        onEachFeature={onEachTypeLandUse}
                        data={test.features}
                    />
                )} */}
            </MapContainer>
        </div>
    );
}

export default Test;
