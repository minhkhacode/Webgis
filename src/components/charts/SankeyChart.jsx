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

        const colors = {
            BHK: 'red',
            CLN: 'green',
            DGT: 'blue',
            DRA: 'gray',
            DTL: 'orange',
            LUC: 'purple',
            NKH: 'brown',
            NTS: 'yellow',
            ONT: 'cyan',
            SKC: 'pink',
            SON: 'teal',
            TQ: 'gold',
            'Cay lau nam': 'darkgreen',
            Lua: 'lightgreen',
            Rung: 'forestgreen',
            'Cay hang nam': 'lightblue',
            'Dat xay dung': 'gray',
        };

        const getHover = (key) => colors[key] || 'gray';
        const getColor = (key) => colors[key] || 'gray';

        if (chartInstance.current) chartInstance.current.destroy();

        chartInstance.current = new Chart(ctx, {
            type: 'sankey',
            data: {
                datasets: [
                    {
                        label: 'My Sankey Chart',
                        data: [
                            { from: 'BHK', to: 'Cay lau nam', flow: 1833 },
                            { from: 'BHK', to: 'Lua', flow: 1344 },
                            { from: 'BHK', to: 'Rung', flow: 526 },
                            { from: 'CLN', to: 'Cay hang nam', flow: 515 },
                            { from: 'CLN', to: 'Dat xay dung', flow: 360 },
                            { from: 'CLN', to: 'Lua', flow: 847 },
                            { from: 'CLN', to: 'Rung', flow: 776 },
                            { from: 'DGT', to: 'Cay hang nam', flow: 1273 },
                            { from: 'DGT', to: 'Cay lau nam', flow: 2492 },
                            { from: 'DGT', to: 'Lua', flow: 2544 },
                            { from: 'DGT', to: 'Rung', flow: 538 },
                            { from: 'DRA', to: 'Cay lau nam', flow: 108 },
                            { from: 'DTL', to: 'Cay hang nam', flow: 1038 },
                            { from: 'DTL', to: 'Cay lau nam', flow: 2736 },
                            { from: 'DTL', to: 'Dat xay dung', flow: 255 },
                            { from: 'DTL', to: 'Lua', flow: 2482 },
                            { from: 'DTL', to: 'Rung', flow: 401 },
                            { from: 'LUC', to: 'Cay hang nam', flow: 1586 },
                            { from: 'LUC', to: 'Cay lau nam', flow: 4359 },
                            { from: 'LUC', to: 'Dat xay dung', flow: 188 },
                            { from: 'LUC', to: 'Rung', flow: 727 },
                            { from: 'NKH', to: 'Cay hang nam', flow: 453 },
                            { from: 'NKH', to: 'Dat xay dung', flow: 490 },
                            { from: 'NKH', to: 'Lua', flow: 376 },
                            { from: 'NKH', to: 'Rung', flow: 138 },
                            { from: 'NTS', to: 'Cay hang nam', flow: 211 },
                            { from: 'NTS', to: 'Cay lau nam', flow: 332 },
                            { from: 'NTS', to: 'Lua', flow: 398 },
                            { from: 'ONT', to: 'Cay hang nam', flow: 118 },
                            { from: 'ONT', to: 'Cay lau nam', flow: 266 },
                            { from: 'SKC', to: 'Cay hang nam', flow: 356 },
                            { from: 'SKC', to: 'Cay lau nam', flow: 236 },
                            { from: 'SKC', to: 'Rung', flow: 693 },
                            { from: 'SON', to: 'Cay hang nam', flow: 1129 },
                            { from: 'SON', to: 'Cay lau nam', flow: 795 },
                            { from: 'SON', to: 'Dat xay dung', flow: 386 },
                            { from: 'SON', to: 'Rung', flow: 475 },
                            { from: 'TQ', to: 'Cay hang nam', flow: 1638 },
                            { from: 'TQ', to: 'Cay lau nam', flow: 7314 },
                            { from: 'TQ', to: 'Dat xay dung', flow: 2336 },
                            { from: 'TQ', to: 'Lua', flow: 2919 },
                            { from: 'TQ', to: 'Rung', flow: 991 },
                        ],
                        colorFrom: (c) => getColor(c.dataset.data[c.dataIndex].from),
                        colorTo: (c) => getColor(c.dataset.data[c.dataIndex].to),
                        hoverColorFrom: (c) => getHover(c.dataset.data[c.dataIndex].from),
                        hoverColorTo: (c) => getHover(c.dataset.data[c.dataIndex].to),
                        colorMode: 'gradient',
                        alpha: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Sankey Diagram of Land Use Changes',
                        font: {
                            size: isExpanded ? 18 : 10,
                            weight: 'bold',
                        },
                        color: '#333', // Title color
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
