import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Pie chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
            },
            title: {
                display: true,
                text: 'Sales Data (2023)',
            },
            legend: {
                display: false, // Disable the legend
            },
        },
    };

    const options2 = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
            },
            title: {
                display: true,
                text: 'Sales Data (2023)',
            },
        },
    };

    return (
        <div className="w-full h-full flex justify-between items-center">
            <div className="w-[48%] h-full">
                <Pie data={data} options={options} />
            </div>
            <div className="w-[48%] h-full">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default PieChart;
