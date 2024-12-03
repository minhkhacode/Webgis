const GetPNNMap = async () => {
    try {
        const responsePNN = await fetch(
            `minhkha/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=minhkha%3APNN_changes&outputFormat=application%2Fjson`,
        );
        const dataPNN = await responsePNN.json();
        return dataPNN;
    } catch (error) {
        console.error('Error fetching the Sankey data:', error);
    }
};

export default GetPNNMap;
