import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNN, togglePNN, toggleTQ } from '../../features/layer/layerSlice.jsx';
import { IoIosSettings } from 'react-icons/io';
import { FaRegCheckCircle } from 'react-icons/fa';

function LayerSelector() {
    const [isMapListVisible, setIsMapListVisible] = useState(false);
    const mapListRef = useRef(null); // Tạo ref để kiểm tra click bên ngoài
    const [PNN, setPNN] = useState(null);
    const [NN, setNN] = useState(null);
    const [TQ, setTQ] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState('');

    const dispatch = useDispatch();
    const { compareLayer } = useSelector((state) => state.layer);

    const toggleMapList = () => {
        setIsMapListVisible((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mapListRef.current && !mapListRef.current.contains(event.target)) {
                setIsMapListVisible(false); // Đóng LayerSelector khi click ngoài component
            }
        };

        if (isMapListVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMapListVisible]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responsePNN = await fetch('/PNN.geojson');
                const dataPNN = await responsePNN.json();
                setPNN(dataPNN);

                const responseNN = await fetch('/NN.geojson');
                const dataNN = await responseNN.json();
                setNN(dataNN);

                const responseTQ = await fetch('/TQ.geojson');
                const dataTQ = await responseTQ.json();
                setTQ(dataTQ);
            } catch (error) {
                console.error('Error loading GeoJSON:', error);
            }
        };

        fetchData();
    }, []);

    const handleToggleNN = () => {
        dispatch(toggleNN({ ...NN }));
    };

    const handleTogglePNN = () => {
        dispatch(togglePNN({ ...PNN }));
    };

    const handleToggleTQ = () => {
        dispatch(toggleTQ({ ...TQ }));
    };

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };

    return (
        <div className="absolute z-[9998] right-5 top-[10%]">
            <div className="relative flex justify-end items-center space-x-4" ref={mapListRef}>
                <div
                    className={`map-list absolute top-10 right-10 bg-white bg-opacity-[0.8] p-5 rounded-lg shadow-lg flex flex-col min-w-[200px] transition-all duration-300 ease-in-out origin-top-right transform ${
                        isMapListVisible ? 'scale-100' : 'scale-0'
                    } border border-gray-200`}
                >
                    <div className="flex items-center w-full mb-4">
                        <select
                            name="region"
                            id="region"
                            value={selectedRegion}
                            onChange={handleRegionChange}
                            className="w-full border border-gray-300 rounded-lg p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                        >
                            <option value="">{'-- Select Region --'}</option>
                            <option value="region1">Region 1</option>
                            <option value="region2">Region 2</option>
                            <option value="region3">Region 3</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={handleTogglePNN}
                            className={`relative flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${
                                compareLayer['PNN']
                                    ? 'border-2 border-blue-500 bg-blue-50'
                                    : 'border-2 border-transparent'
                            } hover:scale-105`}
                        >
                            {compareLayer['PNN'] && (
                                <FaRegCheckCircle className="absolute top-1 right-1 text-blue-500" />
                            )}
                            NDVI Map
                        </button>

                        <button
                            onClick={handleTogglePNN}
                            className={`relative flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${
                                compareLayer['PNN']
                                    ? 'border-2 border-blue-500 bg-blue-50'
                                    : 'border-2 border-transparent'
                            } hover:scale-105`}
                        >
                            {compareLayer['PNN'] && (
                                <FaRegCheckCircle className="absolute top-1 right-1 text-blue-500" />
                            )}
                            Land Inventory Map
                        </button>

                        <button
                            onClick={handleTogglePNN}
                            className={`relative flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${
                                compareLayer['PNN']
                                    ? 'border-2 border-blue-500 bg-blue-50'
                                    : 'border-2 border-transparent'
                            } hover:scale-105`}
                        >
                            {compareLayer['PNN'] && (
                                <FaRegCheckCircle className="absolute top-1 right-1 text-blue-500" />
                            )}
                            Overlay Non-Agricultural Land Changes
                        </button>

                        <button
                            onClick={handleToggleNN}
                            className={`relative flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${
                                compareLayer['NN']
                                    ? 'border-2 border-blue-500 bg-blue-50'
                                    : 'border-2 border-transparent'
                            } hover:scale-105`}
                        >
                            {compareLayer['NN'] && (
                                <FaRegCheckCircle className="absolute top-1 right-1 text-blue-500" />
                            )}
                            Overlay Agricultural Land Changes
                        </button>

                        <button
                            onClick={handleToggleTQ}
                            className={`relative flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${
                                compareLayer['TQ']
                                    ? 'border-2 border-blue-500 bg-blue-50'
                                    : 'border-2 border-transparent'
                            } hover:scale-105`}
                        >
                            {compareLayer['TQ'] && (
                                <FaRegCheckCircle className="absolute top-1 right-1 text-blue-500" />
                            )}
                            Overlay Mixed Land Changes
                        </button>
                    </div>
                </div>
                <button
                    onClick={toggleMapList}
                    className="p-2 rounded-full bg-white shadow hover:bg-blue-500 transition duration-300 text-gray-600 hover:text-white"
                    title="Settings"
                >
                    <IoIosSettings
                        className={`text-2xl transform transition-transform duration-300 ${
                            isMapListVisible ? 'rotate-90' : 'rotate-0'
                        }`}
                    />
                </button>
            </div>
        </div>
    );
}

export default LayerSelector;
