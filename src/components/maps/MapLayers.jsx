import { GeoJSON } from 'react-leaflet';

export default function MapLayers({ getJsonDataList, styles }) {
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
                    color: 'blue',
                });
            },
            clickOutSide: (event) => {
                event.target.setStyle({
                    fillColor: 'red',
                    fillOpacity: '0.1',
                    color: 'blue',
                    fontWeight: '200',
                });
            },
        });
    };

    return (
        <>
            {getJsonDataList.map((item, index) =>
                item ? (
                    <GeoJSON style={styles[index]} data={item.features} onEachFeature={onEachTypeLandUse} key={index} />
                ) : null,
            )}
        </>
    );
}
