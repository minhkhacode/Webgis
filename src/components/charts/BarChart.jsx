import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['Lua tom', 'Lua', 'Cay hang nam', 'Cay lau nam', 'Thuy san', 'Song', 'Dat xay dung', 'Rung'],
        datasets: [
            {
                label: 'Fruit Sales 2023 (in tons)',
                data: [68, 91, 4, 16, 91, 56, 59, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
            {
                label: 'Fruit Sales Duplicate (in tons)',
                data: [22, 75, 57, 38, 1, 40, 92, 6], // Same data as the first dataset
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Sales Data (2023)',
            },
            legend: {
                display: false, // Disable the legend
            },
        },
        animation: {
            duration: 1000, // Duration of the animation in milliseconds
            easing: 'easeInOutBounce', // Easing function for the animation
        },
    };

    return (
        <div className="w-full h-full">
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
