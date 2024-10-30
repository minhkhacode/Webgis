import { Chart } from 'react-google-charts';

const SankeyChart = () => {
    const new_data = {
        'Thổ quả': { 'Thổ quả ': 70.0, 'Nông nghiệp ': 20.0, 'Phi nông nghiệp ': 10.0 },
        'Nông nghiệp': { 'Thổ quả ': 5.0, 'Nông nghiệp ': 80.0, 'Phi nông nghiệp ': 15.0 },
        'Phi nông nghiệp': { 'Thổ quả ': 10.0, 'Nông nghiệp ': 5.0, 'Phi nông nghiệp ': 85.0 },
    };

    const data = [['From', 'To', 'Percent']];
    Object.entries(new_data).forEach(([from, destinations]) => {
        Object.entries(destinations).forEach(([to, percent]) => {
            data.push([from, to, percent]);
        });
    });

    data.push(['Loai đất chưa được xác định ', 'Thổ quả ', 50.0]);
    data.push(['Loai đất chưa được xác định ', 'Nông nghiệp ', 10.0]);
    data.push(['Loai đất chưa được xác định ', 'Phi nông nghiệp ', 40.0]);

    // Define the options for the chart
    const options = {
        sankey: {
            node: {
                colors: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c'],
            },
            link: {
                colorMode: 'gradient',
                colors: ['#d73027', '#fee08b', '#1a9850'],
            },
        },
    };

    return <Chart chartType="Sankey" width="400px" height="270px" data={data} options={options} />;
};

export default SankeyChart;
