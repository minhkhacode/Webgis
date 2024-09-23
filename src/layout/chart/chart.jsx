/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import { FaBars } from 'react-icons/fa6';
import HeaderComponent from '../../components/HeaderComponent';
import BarChart from '../../components/charts/BarChart';
import PieChart from '../../components/charts/PieChart';
import SankeyChart from '../../components/charts/SankeyChart';
import LineChart from '../../components/charts/LineChart';

function ChartContent({ handleShowSidebar }) {
    return (
        <div className="content h-screen overflow-y-scroll max-custom:w-screen">
            <HeaderComponent
                title="Dự án bản đồ trường ĐHCT"
                fontStyle="text-[1rem] text-[#fff] font-light leading-[30px] overflow-hidden text-left block whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-custom:w-full"
                icon={<FaBars className="h-[24px] w-[42px] cursor-pointer" />}
                handleShowSidebar={handleShowSidebar}
            />
            <div className="card mx-8 my-12 p-4 rounded-lg bg-white">
                <div className="card-header">
                    <h1 className="card-title text-sm text-[#3C4858] font-extralight">
                        Sơ đồ kết quả so sánh giữa các tháng trong xã Thuận Hòa Sóc Trăng
                    </h1>
                    <div className="card-nav">
                        <div className="mt-[10px] chart-wrapper">
                            <BarChart />
                            <div className="my-[25px]" />
                            <div className="flex">
                                <PieChart />
                                <PieChart />
                                <PieChart />
                            </div>
                            <div className="my-[25px]" />
                            <SankeyChart />
                            <div className="my-[25px]" />
                            <LineChart titleChart={'Biểu đồ đường thể hiện biến động giữa các đường trong Thuận Hòa'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChartContent;
