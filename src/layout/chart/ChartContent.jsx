import { FaBars } from 'react-icons/fa6';
import HeaderComponent from '../../components/HeaderComponent';
import BarChart from '../../components/charts/BarChart';
import PieChart from '../../components/charts/PieChart';
import SankeyChart from '../../components/charts/SankeyChart';
import LineChart from '../../components/charts/LineChart';
import { useTranslation } from 'react-i18next';

function ChartContent({ handleShowSidebar }) {
    const { t, i18n } = useTranslation();

    return (
        <div className="content h-screen overflow-y-scroll w-full">
            <HeaderComponent
                title={t('titleCTU')}
                fontStyle="text-[1rem] text-[#fff] font-light leading-[30px] overflow-hidden text-left block whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.3)] w-full"
                icon={<FaBars className="h-[24px] w-[42px] cursor-pointer" />}
                handleShowSidebar={handleShowSidebar}
            />
            <div className="card p-4 bg-white">
                <div className="card-header">
                    <h1 className="card-title text-sm text-[#3C4858] font-extralight">{t('titleChar')}</h1>
                    <div className="card-nav rounded-lg">
                        <div className="chart-wrapper shadow-custom my-4 p-6">
                            {/* Sankey Chart */}
                            <div className="p-4 shadow-custom mb-6">
                                <SankeyChart />
                            </div>

                            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                                <div className="w-[40%] h-[600px] p-4 shadow-custom rounded-lg">
                                    <PieChart />
                                </div>

                                <div className="grow h-[600px] p-4 shadow-custom rounded-lg">
                                    <BarChart />
                                </div>
                            </div>

                            <div className="p-4 shadow-custom">
                                <LineChart
                                    titleChart={'Biểu đồ đường thể hiện biến động giữa các đường trong Thuận Hòa'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChartContent;
