import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import 'chartjs-chart-sankey'; // Import the Sankey plugin
import { SankeyController, Flow } from 'chartjs-chart-sankey';

Chart.register(SankeyController, Flow);

const SankeyChart = ({ isExpanded }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Dữ liệu gốc của bạn
        const rawData = [
            { from: '2022 - Cay hang nam ', to: '2023 - Cay lau nam', flow: 2028 },
            { from: '2022 - Cay hang nam', to: '2023 - Lua', flow: 1368 },
            { from: '2022 - Cay hang nam', to: '2023 - Rung', flow: 559 },
            { from: '2022 - Cay lau nam', to: '2023 - Cay hang nam', flow: 2478 },
            { from: '2022 - Cay lau nam', to: '2023 - Dat xay dung', flow: 3121 },
            { from: '2022 - Cay lau nam', to: '2023 - Lua', flow: 2560 },
            { from: '2022 - Cay lau nam', to: '2023 - Rung', flow: 1817 },
            { from: '2022 - Dat xay dung', to: '2023 - Cay hang nam', flow: 1957 },
            { from: '2022 - Dat xay dung', to: '2023 - Cay lau nam', flow: 3414 },
            { from: '2022 - Dat xay dung', to: '2023 - Lua', flow: 2815 },
            { from: '2022 - Dat xay dung', to: '2023 - Rung', flow: 1414 },
            { from: '2022 - Lua', to: '2023 - Cay hang nam', flow: 1645 },
            { from: '2022 - Lua', to: '2023 - Cay lau nam', flow: 4674 },
            { from: '2022 - Lua', to: '2023 - Dat xay dung', flow: 231 },
            { from: '2022 - Lua', to: '2023 - Rung', flow: 780 },
            { from: '2022 - Song', to: '2023 - Cay hang nam', flow: 2167 },
            { from: '2022 - Song', to: '2023 - Cay lau nam', flow: 3531 },
            { from: '2022 - Song', to: '2023 - Dat xay dung', flow: 641 },
            { from: '2022 - Song', to: '2023 - Lua', flow: 2530 },
            { from: '2022 - Song', to: '2023 - Rung', flow: 876 },
            { from: '2022 - Thuy san', to: '2023 - Cay hang nam', flow: 215 },
            { from: '2022 - Thuy san', to: '2023 - Cay lau nam', flow: 334 },
            { from: '2022 - Thuy san', to: '2023 - Lua', flow: 436 },
        ];

        // Tạo bản sao dữ liệu để tránh thay đổi dữ liệu gốc
        const sankeyData = JSON.parse(JSON.stringify(rawData));

        // Xác định màu cho từng nút và các liên kết liên quan đến "Lua"
        const colors = {
            '2022 - Cay hang nam': '#f4a261',
            '2022 - Cay lau nam': '#e76f51',
            '2022 - Dat xay dung': '#2a9d8f',
            '2022 - Lua': '#43a047', // Màu xanh lá cây cho Lua
            '2022 - Song': '#1d3557',
            '2022 - Thuy san': '#457b9d',
            '2023 - Cay hang nam': '#ffb703',
            '2023 - Cay lau nam': '#fb8500',
            '2023 - Dat xay dung': '#219ebc',
            '2023 - Lua': '#43a047', // Màu xanh lá cây cho Lua
            '2023 - Rung': '#8ecae6',
        };

        const getHover = (key) => (key.includes('Lua') ? '#76d275' : colors[key] || 'gray');
        const getColor = (key) => (key.includes('Lua') ? '#43a047' : colors[key] || 'gray');

        // Hủy biểu đồ cũ nếu đã tồn tại
        if (chartInstance.current) chartInstance.current.destroy();

        // Tạo biểu đồ Sankey
        chartInstance.current = new Chart(ctx, {
            type: 'sankey',
            data: {
                datasets: [
                    {
                        label: 'Biểu đồ Sankey',
                        data: sankeyData,
                        colorFrom: (c) => getColor(c.dataset.data[c.dataIndex].from),
                        colorTo: (c) => getColor(c.dataset.data[c.dataIndex].to),
                        hoverColorFrom: (c) => getHover(c.dataset.data[c.dataIndex].from),
                        hoverColorTo: (c) => getHover(c.dataset.data[c.dataIndex].to),
                        colorMode: 'gradient',
                        alpha: 0.8,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Sankey diagram of land use change',
                        color: 'white',
                        font: {
                            size: isExpanded ? 18 : 10,
                            weight: 'bold',
                        },
                    },
                    datalabels: {
                        display: false,
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'white',
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)',
                            },
                        },
                        y: {
                            ticks: {
                                color: 'white',
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)',
                            },
                        },
                    },
                },
            },
        });

        return () => {
            if (chartInstance.current) chartInstance.current.destroy();
        };
    }, [isExpanded]);

    return (
        <div className={`w-full h-full ${isExpanded ? 'p-4' : 'p-2'}`}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default SankeyChart;
