import React from 'react';
import HeaderComponent from '../../components/HeaderComponent.jsx';
import Button from '../../components/Button.jsx';
import { MdDashboard } from 'react-icons/md';
import { FaChartBar } from 'react-icons/fa';
import { FaCodeCompare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar h-screen flex flex-col">
            <HeaderComponent
                title="Bản đồ DHCT"
                fontStyle="uppercase text-[1.15rem] text-[#fff] font-medium leading-[30px] overflow-hidden text-center block whitespace-nowrap"
            />

            <div className="card-container relative flex-grow">
                <ul className="tools mt-5 ">

                    <li className="tools-item w-full px-5 mb-5">
                        <Link to="/">
                            <Button
                                content="Bản đồ"
                                customStyle="w-full rounded shadow-custom"
                                icon={<MdDashboard />}
                            ></Button>
                        </Link>
                    </li>
                    <li className="tools-item w-full px-5 mb-5">
                        <Link to="/chart">
                            <Button
                                content="Biểu đồ"
                                customStyle="w-full rounded shadow-custom"
                                icon={<FaChartBar />}
                            ></Button>
                        </Link>
                    </li>
                    <li className="tools-item w-full px-5 mb-5">
                        <Link to="/">
                            <Button
                                content="So sánh bản đồ"
                                customStyle="w-full rounded shadow-custom"
                                icon={<FaCodeCompare />}
                            ></Button>
                        </Link>
                    </li>
                    <li className="tools-item tools-item_footer w-full flex items-center justify-center gap-5 absolute bottom-2">
                        <div className="mt-2.5 mr-3.75 mb-0 ml-3.75 rounded-sm text-[#3C4858] pl-2.5 pr-2.5 capitalize text-xs py-2.5 px-3.75 cursor-pointer">
                            Tieng Viet
                        </div>
                        <div className="mt-2.5 mr-3.75 mb-0 ml-3.75 rounded-sm text-[#3C4858] pl-2.5 pr-2.5 capitalize text-xs py-2.5 px-3.75 cursor-pointer">
                            English
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
