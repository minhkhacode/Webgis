import { useSelector } from 'react-redux';
import { selectChartTypeList, selectCurrentChart } from '../../features/setting/settingSlice';

function ChartSetting({ isOpen }) {
    const chartList = useSelector(selectChartTypeList);

    return (
        <div
            className={`absolute top-11 right-[60%] z-[10000] bg-[#3f4854] bg-opacity-[0.9] shadow p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out origin-top-right ${
                isOpen ? 'scale-100' : 'scale-0'
            }`}
        >
            {Object.values(chartList).map((chart) => {
                return (
                    <div className="text-nowrap">
                        <h2 className="">{chart.title}</h2>
                        <img
                            src="https://user-images.githubusercontent.com/738805/35692348-145d9cae-07b6-11e8-8136-6f9666be6459.png"
                            alt=""
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default ChartSetting;
