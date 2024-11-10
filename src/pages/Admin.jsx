import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/sidebar/Sidebar';
import LayerManagement from './LayerManagement';

function Map() {
    useEffect(() => {}, []);

    return (
        <div className="admin">
            <div className="wrapper flex w-screen bg-[#ededed] ">
                <div className="bg-[#ededed] flex-grow relative max-custom:ml-0">
                    <LayerManagement />
                </div>
            </div>
        </div>
    );
}

export default Map;
