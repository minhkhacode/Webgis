import { useState } from 'react';
import { FaChartBar, FaInfoCircle, FaAngleRight, FaMapMarkedAlt } from 'react-icons/fa';
import MapSetting from '../../components/mapSetting/MapSetting';

function HeaderComponent({ toggleSidebar, isSidebarOpen, mapType, MapTypeList, handleChangeMapType }) {
    const [isMapSettingOpen, setIsMapSettingOpen] = useState(false);

    const toggleMapSetting = () => {
        setIsMapSettingOpen((prev) => !prev);
    };

    return (
        <div className="header flex justify-between items-center mx-5 mt-10 z-[10000] absolute top-0 left-0 right-0">
            <div className="flex gap-x-2 items-center">
                <button
                    onClick={toggleSidebar}
                    className={`flex items-center bg-[#3f4854] text-white hover:bg-[#05a0bd] shadow focus:outline-none py-2 px-3 rounded-2xl transition ${
                        isSidebarOpen ? 'hidden' : ''
                    }`}
                >
                    <FaAngleRight className="mr-2 text-lg" />
                    <span className="text-sm">Show Toolbar</span>
                </button>
                <button className="flex items-center bg-[#3f4854] text-white hover:bg-[#05a0bd] shadow focus:outline-none py-2 px-3 rounded-2xl transition">
                    <FaInfoCircle className="mr-2" />
                    <span className="text-sm">Show Workbench</span>
                </button>
            </div>
            <div className="flex items-center gap-x-2">
                <div className="relative">
                    <button
                        onClick={toggleMapSetting}
                        className="flex items-center bg-[#3f4854] text-white hover:bg-[#05a0bd] shadow focus:outline-none py-2 px-3 rounded-2xl transition"
                    >
                        <FaMapMarkedAlt className="mr-2" />
                        <span className="text-sm">Map Setting</span>
                    </button>
                    <MapSetting
                        mapType={mapType}
                        MapTypeList={MapTypeList}
                        isOpen={isMapSettingOpen}
                        handleChangeMapType={handleChangeMapType}
                    />
                </div>
                <div className="relative">
                    <button className="flex items-center bg-[#3f4854] text-white hover:bg-[#05a0bd] shadow focus:outline-none py-2 px-3 rounded-2xl transition">
                        <FaChartBar className="mr-2" />
                        <span className="text-sm">Chart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
