import { Chart } from 'react-google-charts';

const SankeyChart = () => {
    const data = [
        ['From', 'To', 'Weight'],
        ['BHK', 'Cay lau nam', 1833],
        ['BHK', 'Lua', 1344],
        ['BHK', 'Rung', 526],
        ['CLN', 'Cay hang nam', 515],
        ['CLN', 'Dat xay dung', 360],
        ['CLN', 'Lua', 847],
        ['CLN', 'Rung', 776],
        ['DGT', 'Cay hang nam', 1273],
        ['DGT', 'Cay lau nam', 2492],
        ['DGT', 'Lua', 2544],
        ['DGT', 'Rung', 538],
        ['DRA', 'Cay lau nam', 108],
        ['DTL', 'Cay hang nam', 1038],
        ['DTL', 'Cay lau nam', 2736],
        ['DTL', 'Dat xay dung', 255],
        ['DTL', 'Lua', 2482],
        ['DTL', 'Rung', 401],
        ['LUC', 'Cay hang nam', 1586],
        ['LUC', 'Cay lau nam', 4359],
        ['LUC', 'Dat xay dung', 188],
        ['LUC', 'Rung', 727],
        ['NKH', 'Cay hang nam', 453],
        ['NKH', 'Dat xay dung', 490],
        ['NKH', 'Lua', 376],
        ['NKH', 'Rung', 138],
        ['NTS', 'Cay hang nam', 211],
        ['NTS', 'Cay lau nam', 332],
        ['NTS', 'Lua', 398],
        ['ONT', 'Cay hang nam', 118],
        ['ONT', 'Cay lau nam', 266],
        ['SKC', 'Cay hang nam', 356],
        ['SKC', 'Cay lau nam', 236],
        ['SKC', 'Rung', 693],
        ['SON', 'Cay hang nam', 1129],
        ['SON', 'Cay lau nam', 795],
        ['SON', 'Dat xay dung', 386],
        ['SON', 'Rung', 475],
        ['TQ', 'Cay hang nam', 1638],
        ['TQ', 'Cay lau nam', 7314],
        ['TQ', 'Dat xay dung', 2336],
        ['TQ', 'Lua', 2919],
        ['TQ', 'Rung', 991],
    ];

    const options = {
        sankey: {
            node: {
                label: {
                    fontSize: 14,
                    bold: true,
                    color: '#333333',
                },
                interactivity: true,
                width: 15,
                colors: ['#6baed6', '#3182bd', '#9ecae1', '#31a354', '#a1d99b', '#d62728'],
            },
            link: {
                colorMode: 'gradient',
                colors: ['#d73027', '#fee08b', '#1a9850'],
                opacity: 0.6,
            },
        },
    };

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full max-w-[800px] max-h-[600px] aspect-w-4 aspect-h-3">
                <Chart chartType="Sankey" width="100%" height="100%" data={data} options={options} />
            </div>
        </div>
    );
};

export default SankeyChart;
