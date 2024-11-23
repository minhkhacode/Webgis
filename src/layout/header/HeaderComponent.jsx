import { useEffect, useRef, useState } from 'react';
import { FaChartBar, FaInfoCircle, FaAngleRight, FaMapMarkedAlt } from 'react-icons/fa';
import MapSetting from '../../components/mapSetting/MapSetting';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarStatus, toggleSidebar } from '../../features/setting/settingSlice';
import ChartSetting from '../../components/chartSetting/ChartSetting';
import { togglePredictionForm } from '../../features/InputMapProperties/inputPredictionSlice';

function HeaderComponent() {
    const dispatch = useDispatch();
    const mapSettingRef = useRef(null);
    const chartSettingRef = useRef(null);
    const [isMapSettingOpen, setIsMapSettingOpen] = useState(false);
    const [isChartSettingOpen, setIsChartSettingOpen] = useState(false);

    const isSidebarOpen = useSelector(selectSidebarStatus);

    const toggleMapSetting = (event) => {
        event.stopPropagation();
        setIsMapSettingOpen((prev) => !prev);
    };

    const toggleChartSetting = (event) => {
        event.stopPropagation();
        setIsChartSettingOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (isMapSettingOpen && mapSettingRef.current && !mapSettingRef.current.contains(event.target)) {
            setIsMapSettingOpen(false);
        }
        if (isChartSettingOpen && chartSettingRef.current && !chartSettingRef.current.contains(event.target)) {
            setIsChartSettingOpen(false);
        }
    };

    useEffect(() => {
        if (isMapSettingOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMapSettingOpen]);

    useEffect(() => {
        if (isChartSettingOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isChartSettingOpen]);

    return (
        <div className="header flex justify-between items-center mx-5 z-[10000] absolute top-6 left-0 right-0">
            <div className="flex gap-x-2 items-center">
                <button
                    onClick={() => dispatch(toggleSidebar())}
                    className={`flex items-center bg-[#05a0bd] bg-opacity-80 text-white hover:bg-[#3f4854] shadow focus:outline-none py-2 px-3 rounded-2xl transition ${
                        isSidebarOpen ? 'hidden' : ''
                    }`}
                >
                    <FaAngleRight className="mr-2 text-lg" />
                    <span className="text-sm">Show Toolbar</span>
                </button>
                <button
                    onClick={() => dispatch(togglePredictionForm())}
                    className="flex items-center bg-[#05a0bd] bg-opacity-80 text-white hover:bg-[#3f4854] shadow focus:outline-none py-2 px-3 rounded-2xl transition"
                >
                    <FaInfoCircle className="mr-2" />
                    <span className="text-sm">Prediction Form</span>
                </button>
            </div>
            <div className="flex items-center gap-x-2">
                <div ref={mapSettingRef} className="relative">
                    <button
                        onClick={toggleMapSetting}
                        className="flex items-center bg-[#05a0bd] bg-opacity-80 text-white hover:bg-[#3f4854] shadow focus:outline-none py-2 px-3 rounded-2xl transition"
                    >
                        <FaMapMarkedAlt className="mr-2" />
                        <span className="text-sm">Map Setting</span>
                    </button>
                    <MapSetting isOpen={isMapSettingOpen} />
                </div>
                <div ref={chartSettingRef} className="relative">
                    <button
                        onClick={toggleChartSetting}
                        className="chart-setting flex items-center bg-[#05a0bd] bg-opacity-80 text-white hover:bg-[#3f4854] shadow focus:outline-none py-2 px-3 rounded-2xl transition"
                    >
                        <FaChartBar className="mr-2" />
                        <span className="text-sm">Chart</span>
                    </button>
                    <ChartSetting isOpen={isChartSettingOpen} />
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
