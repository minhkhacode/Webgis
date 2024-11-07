import { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

function MapSetting({ isOpen, mapType, MapTypeList, handleChangeMapType }) {
    const [heading, setHeading] = useState(mapType);
    const [selectedType, setSelectedType] = useState(mapType); // Trạng thái để quản lý mục được chọn

    const handleSelectMapType = (type) => {
        setSelectedType(type); // Cập nhật trạng thái khi mục được chọn
        handleChangeMapType(type);
    };

    return (
        <div
            className={`absolute top-11 right-[60%] z-[10000] bg-[#3f4854] shadow p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out origin-top-right ${
                isOpen ? 'scale-100' : 'scale-0'
            }`}
        >
            <div>
                <h2 className="text-lg text-white font-semibold mb-3">{heading}</h2>
                <ul className="map-type-list flex flex-wrap min-w-[300px]">
                    {Object.keys(MapTypeList).map((type, index) => (
                        <li
                            key={index}
                            className="w-1/3 p-2 relative"
                            onMouseOver={() => setHeading(type)}
                            onMouseLeave={() => setHeading(mapType)}
                        >
                            <button
                                onClick={() => handleSelectMapType(type)}
                                className={`relative flex items-center justify-center p-2 rounded-lg transition-all duration-300 ease-in-out ${
                                    selectedType === type
                                        ? 'border-2 border-blue-500 scale-105 shadow-lg' // Border và hiệu ứng phóng to khi được chọn
                                        : 'border-2 border-transparent'
                                } hover:scale-105 hover:border-gray-300`} // Hiệu ứng khi di chuột
                            >
                                {selectedType === type && (
                                    <FaRegCheckCircle className="absolute top-1 right-1 text-blue-500" />
                                )}
                                <img src={MapTypeList[type].image} alt="" className="w-full h-auto rounded-md" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MapSetting;
