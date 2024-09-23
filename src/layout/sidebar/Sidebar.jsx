/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaChartBar } from 'react-icons/fa';
import { FaCodeCompare } from 'react-icons/fa6';

import HeaderComponent from '../../components/HeaderComponent.jsx';
import Button from '../../components/Button.jsx';

function Sidebar({ isShowSidebar }) {
    return (
        <div
            className={`sidebar flex flex-col bg-[#fff] w-[260px] text-white h-screen shadow-[8px_0_20px_rgba(0,0,0,0.1)] fixed top-0 left-0  z-20 transition duration-300 ease-in-out ${
                isShowSidebar ? 'max-custom:translate-x-0' : 'max-custom:-translate-x-full'
            }`}
        >
            <HeaderComponent
                title="Bản đồ ĐHCT"
                fontStyle="uppercase text-[1.15rem] text-[#fff] font-medium leading-[30px] overflow-hidden text-center block whitespace-nowrap w-full"
            />

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="sidebar h-screen flex flex-col fixed w-[260px] max-custom:hidden">
                <HeaderComponent
                    title="Bản đồ ĐHCT"
                    fontStyle="uppercase text-[1.15rem] text-[#fff] font-medium leading-[30px] overflow-hidden text-center block whitespace-nowrap w-full"
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

            <div className="hidden max-custom:show">
                <div className="flex">
                    {/* Sidebar */}
                    <div
                        className={`fixed top-0 left-0 h-screen bg-gray-800 p-4 transform ${
                            isOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out w-64`}
                    >
                        <button
                            onClick={toggleSidebar}
                            className="text-white focus:outline-none hover:bg-gray-700 p-2 rounded"
                        >
                            {isOpen ? 'Close' : 'Open'}
                        </button>

                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-white flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                                >
                                    <span className="material-icons">home</span>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                                >
                                    <span className="material-icons">settings</span>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                                >
                                    <span className="material-icons">info</span>
                                    <span>About</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow p-8">
                        <h1 className="text-3xl font-semibold">Main Content Area</h1>
                        <p>This is where the main content goes.</p>

                        <button
                            onClick={toggleSidebar}
                            className="bg-blue-500 text-white p-2 rounded focus:outline-none hover:bg-blue-600"
                        >
                            {isOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
