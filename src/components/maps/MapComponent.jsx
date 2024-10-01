import { MapContainer, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
    return (
        <MapContainer
            center={[9.675, 105.9043]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '600px', width: '100%', zIndex: '0' }}
        >
            {/* <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
            /> */}
            <WMSTileLayer
                url="http://192.168.64.5:8080/geoserver/ne/wms"
                layers="ne:boundary_lines"
                format="image/png"
                transparent={true}
                attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />

            {/* <GeoJSON data={geoData.features} style={CountryStyleList} /> */}
        </MapContainer>
    );
}

export default MapComponent;
