import { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectChartTypeList, selectCurrentChart } from '../../features/setting/settingSlice';

function ChartSetting({ isOpen }) {
    const chart = useSelector(selectCurrentChart);
    console.log(chart);

    const chartList = useSelector(selectChartTypeList);

    return (
        <div
            className={`absolute top-11 right-[60%] z-[10000] bg-[#3f4854] bg-opacity-[0.9] shadow p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out origin-top-right ${
                isOpen ? 'scale-100' : 'scale-0'
            }`}
        >
            {chart.element}
        </div>
    );
}

export default ChartSetting;
