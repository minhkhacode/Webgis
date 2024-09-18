import React from 'react';
import HeaderComponent from '../../components/HeaderComponent.jsx';

function Sidebar() {
    return (
        <div className="sidebar fixed w-1/5 h-full">
            <HeaderComponent title={'bản đồ ĐHCT'} />

            <div className="card-container bottom-0 h-full relative">
                <ul className="tools mt-5">
                    <li
                        className="tools-item bg-blue-600 !important bg-opacity-100 my-3 mx-3.5 cursor-pointer h-12 content-center rounded"
                        style={{
                            backgroundColor: '#0d47a1',
                            color: 'white',
                        }}
                    >
                        <p className="flex items-center flex-wrap justify-center font-thin">
                            <span className="material-symbols-outlined mr-4 ">space_dashboard</span>
                            Bản Đồ Tổng Quan
                        </p>
                    </li>
                    <li
                        className="tools-item bg-blue-600 !important bg-opacity-100 my-3 mx-3.5 cursor-pointer h-12 content-center rounded"
                        style={{
                            backgroundColor: '#0d47a1',
                            color: 'white',
                        }}
                    >
                        <p className="flex items-center flex-wrap justify-center font-thin">
                            <span className="material-symbols-outlined mr-4 ">space_dashboard</span>
                            Bản Đồ Tổng Quan
                        </p>
                    </li>
                    <li
                        className="tools-item bg-blue-600 !important bg-opacity-100 my-3 mx-3.5 cursor-pointer h-12 content-center rounded"
                        style={{
                            backgroundColor: '#0d47a1',
                            color: 'white',
                        }}
                    >
                        <p className="flex items-center flex-wrap justify-center font-thin">
                            <span className="material-symbols-outlined mr-4 ">space_dashboard</span>
                            Bản Đồ Tổng Quan
                        </p>
                    </li>
                </ul>
            </div>
            <div className="tools-item tools-item_footer w-full absolute bottom-1 flex items-center justify-center gap-3">
                <div className="cursor-pointer colors-gray-dark" style={{ color: '#3C4858' }}>
                    Tiếng Việt
                </div>
                <div className="cursor-pointer" style={{ color: '#3C4858' }}>
                    English
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
