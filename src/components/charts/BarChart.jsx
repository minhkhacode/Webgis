import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components used in the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    // Data for the chart
    const data = {
        labels: ['Apples', 'Oranges', 'Bananas', 'Grapes', 'Pineapples'], // Custom labels
        datasets: [
            {
                label: 'Fruit Sales 2023 (in tons)', // Label for the dataset
                data: [12, 19, 3, 5, 2], // Custom data values
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', // Color for Apples
                    'rgba(54, 162, 235, 0.6)', // Color for Oranges
                    'rgba(255, 206, 86, 0.6)', // Color for Bananas
                    'rgba(75, 192, 192, 0.6)', // Color for Grapes
                    'rgba(153, 102, 255, 0.6)', // Color for Pineapples
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)', // Border color for Apples
                    'rgba(54, 162, 235, 1)', // Border color for Oranges
                    'rgba(255, 206, 86, 1)', // Border color for Bananas
                    'rgba(75, 192, 192, 1)', // Border color for Grapes
                    'rgba(153, 102, 255, 1)', // Border color for Pineapples
                ],
                borderWidth: 1, // Width of the borders around each bar
            },
        ],
    };

    // Options for the chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales Data (2023)',
            },
        },
    };

    return (
        <div className="w-full">
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
