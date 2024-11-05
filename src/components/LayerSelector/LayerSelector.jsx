import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNN, togglePNN, toggleTQ } from '../../features/layer/layerSlice.jsx';
import { IoIosSettings } from 'react-icons/io';

function LayerSelector() {
    const [isMapListVisible, setIsMapListVisible] = useState(false); // state to control map-list visibility
    const [PNN, setPNN] = useState(null);
    const [NN, setNN] = useState(null);
    const [TQ, setTQ] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState('');

    const dispatch = useDispatch();
    const { compareLayer } = useSelector((state) => state.layer);

    // Toggle function
    const toggleMapList = () => {
        setIsMapListVisible(!isMapListVisible);
    };

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
        setSelectedRegion(event.target.value); // Update the selected region
    };

    return (
        <div className="absolute z-[10000] right-[1%] top-[10%]">
            {/* Add gear icon for toggling map-list */}
            <div className="relative flex justify-end items-center space-x-4">
                {/* Conditional rendering of map-list with animation */}
                <div
                    className={`map-list absolute top-10 right-10 bg-gray-100 p-4 rounded-lg shadow-lg flex items-center flex-col min-w-1 transition-opacity transition-transform duration-300 ${
                        isMapListVisible
                            ? 'opacity-100 scale-100 translate-y-0'
                            : 'opacity-0 scale-75 -translate-y-5 pointer-events-none'
                    } origin-top-right`}
                >
                    <div className="flex items-center w-full mb-4">
                        <select
                            name="region"
                            id="region"
                            value={selectedRegion}
                            onChange={handleRegionChange}
                            className="border border-gray-300 rounded-lg p-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                        >
                            <option value="">{'-- Khu vực --'}</option>
                            <option value="region1">Khu vực 1</option>
                            <option value="region2">Khu vực 2</option>
                            <option value="region3">Khu vực 3</option>
                        </select>
                        <select
                            name="region"
                            id="region"
                            value={selectedRegion}
                            onChange={handleRegionChange}
                            className="border border-gray-300 rounded-lg p-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                        >
                            <option value="">{'-- Khu vực --'}</option>
                            <option value="region1">Khu vực 1</option>
                            <option value="region2">Khu vực 2</option>
                            <option value="region3">Khu vực 3</option>
                        </select>
                    </div>
                    <div className="flex items-center w-full">
                        <input
                            checked={compareLayer['PNN'] ? true : false}
                            type="checkbox"
                            onChange={handleTogglePNN}
                            id="PNN"
                            className="mr-2"
                        />
                        <label htmlFor="PNN" className="cursor-pointer whitespace-nowrap grow">
                            Bản đồ NDVI
                        </label>
                    </div>
                    <div className="flex items-center w-full">
                        <input
                            checked={compareLayer['PNN'] ? true : false}
                            type="checkbox"
                            onChange={handleTogglePNN}
                            id="PNN"
                            className="mr-2"
                        />
                        <label htmlFor="PNN" className="cursor-pointer whitespace-nowrap grow">
                            Bản đồ kiểm kê đất đai
                        </label>
                    </div>
                    <div className="flex items-center w-full">
                        <input
                            checked={compareLayer['PNN'] ? true : false}
                            type="checkbox"
                            onChange={handleTogglePNN}
                            id="PNN"
                            className="mr-2"
                        />
                        <label htmlFor="PNN" className="cursor-pointer whitespace-nowrap grow">
                            Bản đồ chồng lấp biến động đất phi nông nghiệp
                        </label>
                    </div>
                    <div className="flex items-center w-full">
                        <input
                            checked={compareLayer['NN'] ? true : false}
                            type="checkbox"
                            onChange={handleToggleNN}
                            id="NN"
                            className="mr-2"
                        />
                        <label htmlFor="NN" className="cursor-pointer whitespace-nowrap grow">
                            Bản đồ chồng lấp biến động đất nông nghiệp
                        </label>
                    </div>
                    <div className="flex items-center w-full">
                        <input
                            checked={compareLayer['TQ'] ? true : false}
                            type="checkbox"
                            onChange={handleToggleTQ}
                            id="TQ"
                            className="mr-2"
                        />
                        <label htmlFor="TQ" className="cursor-pointer whitespace-nowrap grow">
                            Bản đồ chồng lấp biến động đất hỗn hợp
                        </label>
                    </div>
                </div>
                {/* Settings button */}
                <button
                    onClick={toggleMapList}
                    className="p-2 m-2 rounded-full bg-white hover:bg-blue-500 transition duration-300 text-gray-600 hover:text-white"
                    title="Settings"
                >
                    <IoIosSettings
                        className={`h-6 w-6 transform transition-transform duration-300 ${
                            isMapListVisible ? 'rotate-90' : 'rotate-0'
                        }`}
                    />
                </button>
            </div>
        </div>
    );
}

export default LayerSelector;
