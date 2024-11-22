import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ isExpanded }) => {
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
                    'rgba(54, 162, 235, 1)',
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
                    <Pie data={data} options={options} />
                </div>
                <div className="w-[48%] h-full flex items-center justify-center">
                    <Pie data={data} options={options} />
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
                {data.labels.map((label, index) => (
                    <div key={label} className="flex items-center space-x-2">
                        <div
                            style={{
                                backgroundColor: data.datasets[0].backgroundColor[index],
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
