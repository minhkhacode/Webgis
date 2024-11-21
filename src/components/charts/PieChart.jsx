import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Pie chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ isExpanded }) => {
    const colors = [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(201, 203, 207, 0.6)',
        'rgba(100, 181, 246, 0.6)',
    ];

    const data1 = {
        labels: ['Lua tom', 'Lua', 'Cay hang nam', 'Cay lau nam', 'Thuy san', 'Song', 'Dat xay dung', 'Rung'],
        datasets: [
            {
                label: 'Fruit Sales 2023 (in tons)',
                data: [68, 91, 4, 16, 91, 56, 59, 10],
                backgroundColor: colors,
                borderColor: colors.map((color) => color.replace('0.6', '1')),
                borderWidth: 1,
            },
        ],
    };

    const data2 = {
        labels: ['Lua tom', 'Lua', 'Cay hang nam', 'Cay lau nam', 'Thuy san', 'Song', 'Dat xay dung', 'Rung'],
        datasets: [
            {
                label: 'Fruit Sales Duplicate (in tons)',
                data: [22, 75, 57, 38, 1, 40, 92, 6],
                backgroundColor: colors,
                borderColor: colors.map((color) => color.replace('0.6', '1')),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },

            title: {
                display: true,
                text: 'Sales Data (2023)',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className={`w-full h-full flex flex-col items-center justify-center ${isExpanded ? 'p-4' : 'p-0'}`}>
            {/* Two Pie Charts Side by Side */}
            <div className={`w-full h-[70%] flex justify-center grow items-center ${isExpanded ? 'mb-4' : 'mb-0'}`}>
                <div className="w-[48%] h-full flex items-center justify-center">
                    <Pie data={data1} options={options} />
                </div>
                <div className="w-[48%] h-full flex items-center justify-center">
                    <Pie data={data2} options={options} />
                </div>
            </div>

            {/* Shared Legend with Transition */}
            <div
                className="flex h-10 justify-center items-center space-x-4 mt-2"
                style={{
                    transform: isExpanded ? 'scale(1)' : 'scale(0.4)',
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                {data1.labels.map((label, index) => (
                    <div key={label} className="flex items-center space-x-2">
                        <div
                            style={{
                                backgroundColor: data1.datasets[0].backgroundColor[index],
                            }}
                            className="w-4 h-4"
                        ></div>
                        <span className="text-white-700">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChart;
