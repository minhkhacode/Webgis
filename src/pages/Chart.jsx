import React from 'react';
import Sidebar from '../layout/sidebar/Sidebar';
import Content from '../layout/content/Content';

function Chart() {
    return (
        <div className="chart">
            <div className="wrapper flex w-screen">
                <div className="sidebar-container w-[260px] text-white h-screen shadow-[8px_0_20px_rgba(0,0,0,0.1)] z-10">
                    <Sidebar />
                </div>
                <div className="map-box flex-grow bg-[#ededed]">
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default Chart;
