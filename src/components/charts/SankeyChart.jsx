import { Chart } from 'react-google-charts';

const SankeyChart = () => {
    // Define the data for the Sankey chart with years in the labels

    const new_data = {
        'Thổ cư': { 'Thổ cư': 70.0, 'Nông nghiệp': 20.0, 'Phi nông nghiệp': 10.0 },
        'Nông nghiệp': { 'Thổ cư': 5.0, 'Nông nghiệp': 80.0, 'Phi nông nghiệp': 15.0 },
        'Phi nông nghiệp': { 'Thổ cư': 10.0, 'Nông nghiệp': 5.0, 'Phi nông nghiệp': 85.0 },
    };
    const data = [
        ['From', 'To', 'Weight'],
        ['Brazil (2020)', 'Portugal (2021)', 5],
        ['Brazil (2020)', 'France (2021)', 1],
        ['Brazil (2020)', 'Spain (2021)', 1],
        ['Brazil (2020)', 'England (2021)', 1],
        ['Canada (2020)', 'Portugal (2021)', 1],
        ['Canada (2020)', 'France (2021)', 5],
        ['Canada (2020)', 'England (2021)', 1],
        ['Mexico (2020)', 'Portugal (2021)', 1],
        ['Mexico (2020)', 'France (2021)', 1],
        ['Mexico (2020)', 'Spain (2021)', 5],
        ['Mexico (2020)', 'England (2021)', 1],
        ['USA (2020)', 'Portugal (2021)', 1],
        ['USA (2020)', 'France (2021)', 1],
        ['USA (2020)', 'Spain (2021)', 1],
        ['USA (2020)', 'England (2021)', 5],
        ['Portugal (2021)', 'Angola (2022)', 2],
        ['Portugal (2021)', 'Senegal (2022)', 1],
        ['Portugal (2021)', 'Morocco (2022)', 1],
        ['Portugal (2021)', 'South Africa (2022)', 3],
        ['France (2021)', 'Angola (2022)', 1],
        ['France (2021)', 'Senegal (2022)', 3],
        ['France (2021)', 'Mali (2022)', 3],
        ['France (2021)', 'Morocco (2022)', 3],
        ['France (2021)', 'South Africa (2022)', 1],
        ['Spain (2021)', 'Senegal (2022)', 1],
        ['Spain (2021)', 'Morocco (2022)', 3],
        ['Spain (2021)', 'South Africa (2022)', 1],
        ['England (2021)', 'Angola (2022)', 1],
        ['England (2021)', 'Senegal (2022)', 1],
        ['England (2021)', 'Morocco (2022)', 2],
        ['England (2021)', 'South Africa (2022)', 7],
        ['South Africa (2022)', 'China (2023)', 5],
        ['South Africa (2022)', 'India (2023)', 1],
        ['South Africa (2022)', 'Japan (2023)', 3],
        ['Angola (2022)', 'China (2023)', 5],
        ['Angola (2022)', 'India (2023)', 1],
        ['Angola (2022)', 'Japan (2023)', 3],
        ['Senegal (2022)', 'China (2023)', 5],
        ['Senegal (2022)', 'India (2023)', 1],
        ['Senegal (2022)', 'Japan (2023)', 3],
        ['Mali (2022)', 'China (2023)', 5],
        ['Mali (2022)', 'India (2023)', 1],
        ['Mali (2022)', 'Japan (2023)', 3],
        ['Morocco (2022)', 'China (2023)', 5],
        ['Morocco (2022)', 'India (2023)', 1],
        ['Morocco (2022)', 'Japan (2023)', 3],
    ];

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

    return (
        <div className="w-full">
            <Chart chartType="Sankey" width="100%" height="300px" data={data} options={options} />
        </div>
    );
};

export default SankeyChart;
