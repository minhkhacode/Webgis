import React, { useState } from 'react';
import Sidebar from '../layout/sidebar/Sidebar';
import Content from '../layout/content/Content';
import LayerManagement from './LayerManagement';

function Map() {
    const [isShowSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = () => {
        setShowSidebar(!isShowSidebar);
    };

    return (
        <div className="admin">
            <div className="wrapper flex w-screen bg-[#ededed] ">
                <Sidebar isShowSidebar={isShowSidebar} />
                {isShowSidebar && (
                    <div
                        onClick={() => setShowSidebar(!isShowSidebar)}
                        className="fixed cursor-pointer inset-0 bg-black bg-opacity-50 z-[1001] transition-opacity duration-300"
                    ></div>
                )}
                <div className="bg-[#ededed] flex-grow relative ml-[260px] max-custom:ml-0">
                    <LayerManagement />
                </div>
            </div>
        </div>
    );
}

export default Map;
