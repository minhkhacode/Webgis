import { GeoJSON } from 'react-leaflet';

export default function MapLayers({ getJsonDataList, styles }) {
    const onEachTypeLandUse = (TypeLandUse, layer) => {
        const properties = TypeLandUse.properties;

        const popupContent = Object.entries(properties)
            .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
            .join('<br>');

        layer.bindPopup(popupContent, {
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
