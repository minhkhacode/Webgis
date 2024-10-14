import { useDispatch, useSelector } from 'react-redux';
// import { fetchLayerGeoJson } from '../app/action';
import { useEffect, useState } from 'react';
// import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet';
import axios from 'axios';
import { toggleNN, togglePNN, toggleTQ } from '../features/test/testSlice';
import MapShapeFile from '../components/maps/MapShapeFile';

function Test() {
    const dispatch = useDispatch();
    const { compareLayer } = useSelector((state) => state.layer);

    // const [geoJsonData, setGeoJsonData] = useState(null);

    // useEffect(() => {
    //     dispatch(fetchLayerGeoJson());
    // }, [dispatch]);

    // useEffect(() => {
    //     axios
    //         .get(`/geoserver/wfs`, {
    //             params: {
    //                 service: 'WFS',
    //                 version: '1.0.0',
    //                 request: 'GetFeature',
    //                 typeName: 'minhkha:thuanhoa_tkdd2022',
    //                 outputFormat: 'application/json',
    //                 srsName: 'EPSG:4326',
    //             },
    //         })
    //         .then((data) => {
    //             console.log(data.data);

    //             setGeoJsonData(data.data);
    //         });
    // }, []);

    const [NN, setNN] = useState(null);
    const [PNN, setPNN] = useState(null);
    const [TQ, setTQ] = useState(null);

    console.log(compareLayer);

    useEffect(() => {
        axios.get('/NN.geojson').then((data) => {
            setNN(data.data);
        });

        axios.get('/PNN.geojson').then((data) => {
            setPNN(data.data);
        });

        axios.get('/TQ.geojson').then((data) => {
            setTQ(data.data);
        });
    }, []);

    const handleToggleNN = () => {
        dispatch(toggleNN({ ...NN }));
        console.log(compareLayer);
    };

    const handleTogglePNN = () => {
        dispatch(togglePNN({ ...PNN }));
        console.log(compareLayer);
    };

    const handleToggleTQ = () => {
        dispatch(toggleTQ({ ...TQ }));
        console.log(compareLayer);
    };

    return (
        <div>
            <input type="checkbox" onChange={handleToggleNN} />
            <input type="checkbox" onChange={handleTogglePNN} />
            <input type="checkbox" onChange={handleToggleTQ} />
            <MapShapeFile getJsonDataList={Object.values(compareLayer)} />
            {/* <MapContainer
                center={[9.680258, 105.905196]}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: '100vh', width: '100%', zIndex: '0' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
                />
                {geoJsonData && <GeoJSON key="my-geojson" data={geoJsonData.features} />}
            </MapContainer> */}
        </div>
    );
}

export default Test;
