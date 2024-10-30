import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Pie chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Thổ quả', 'Nông nghiệp', 'Phi nông nghiệp'],
        datasets: [
            {
                label: '# of Votes',
                data: [10, 40, 50],
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
            legend: {
                position: 'left', // Position of the legend (top, bottom, left, right)
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="w-full max-custom:w-1/2 max-custom:w-1/3">
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
