/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { GoSearch } from 'react-icons/go';

import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import HeaderComponent from '../../components/HeaderComponent';
import MyMap from '../../components/maps/Mymap';
import MapComponent from '../../components/maps/MapComponent.jsx';
import MapShapeFile from '../../components/maps/MapShapeFile';

const Dropdowns = [
    {
        title: 'Hệ quy chiếu',
        Selections: [
            {
                value: 'EPSG:4326',
            },
            {
                value: 'EPSG:4326',
            },
            {
                value: 'EPSG:4326',
            },
            {
                value: 'EPSG:4326',
            },
            {
                value: 'EPSG:4326',
            },
        ],
    },
    {
        title: 'Năm',
        Selections: [
            {
                value: 2020,
            },
            {
                value: 2021,
            },
            {
                value: 2022,
            },
            {
                value: 2023,
            },
            {
                value: 2024,
            },
        ],
    },
    {
        title: 'Tháng',
        Selections: [
            {
                value: 1,
            },
            {
                value: 2,
            },
            {
                value: 3,
            },
            {
                value: 4,
            },
            {
                value: 5,
            },
            {
                value: 6,
            },
            {
                value: 7,
            },
            {
                value: 8,
            },
            {
                value: 9,
            },
            {
                value: 10,
            },
            {
                value: 11,
            },
            {
                value: 12,
            },
        ],
    },
];

function Content() {
    // eslint-disable-next-line no-unused-vars
    const [show, setShow] = useState(false);
    const [showTab, setShowTab] = useState('Bản đồ Google');
    const [geoJsonData, setGeoJsonData] = useState(null);

    const handleActiveTab = (title) => {
        setShowTab(title);
    };

    useEffect(() => {
        fetch('/KQPL.geojson')
            .then((response) => response.json())
            .then((data) => setGeoJsonData(data))
            .catch((error) => console.error('Error loading GeoJSON:', error));
    }, []);

    return (
        <div className="content h-screen overflow-y-scroll max-custom:w-screen">
            <HeaderComponent
                title="Dự án bản đồ trường ĐHCT"
                fontStyle="text-[1rem] text-[#fff] font-light leading-[30px] overflow-hidden text-left block whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-custom:w-full"
                icon={<FaBars className="h-[24px] w-[42px] cursor-pointer" />}
            />
            <div className="card mx-8 my-12 p-4 rounded-lg bg-white">
                <div className="card-header">
                    <h1 className="card-title text-sm text-[#3C4858] font-extralight font-[500]">
                        {showTab === 'Bản đồ Google' && 'Bản đồ Trường Đại Học Cần Thơ'}
                        {showTab === 'Vệ tinh' && 'Bản đồ kết quả phân loại đất của xã Thuận Hòa Sóc Trăng'}
                        {showTab === 'OPENSTREETMAP' && 'OPENSTREETMAP tab'}
                    </h1>
                    <div className="card-nav">
                        <ul className="navbar inline-flex overflow-x-hidden py-2 max-custom:block max-custom:gap-y-2">
                            <li className="nav-item">
                                <Button
                                    content="Bản đồ Google"
                                    customStyle={
                                        showTab === 'Bản đồ Google'
                                            ? 'w-30 !bg-blue-600 hover:shadow-custom rounded-tl-lg rounded-bl-lg max-custom:w-[270px] max-custom:h-14 max-custom:rounded-[5px] max-custom:w-full uppercase'
                                            : 'w-30 hover:shadow-custom rounded-tl-lg rounded-bl-lg max-custom:w-[270px] max-custom:h-14 max-custom:rounded-[5px] max-custom:w-full uppercase'
                                    }
                                    onClick={() => {
                                        handleActiveTab('Bản đồ Google');
                                    }}
                                ></Button>
                            </li>
                            <li className="nav-item">
                                <Button
                                    content="Vệ tinh"
                                    customStyle={
                                        showTab === 'Vệ tinh'
                                            ? 'w-30 !bg-blue-600 hover:shadow-custom max-custom:w-[270px] max-custom:h-14 max-custom:rounded-[5px] max-custom:w-full uppercase'
                                            : 'w-30 hover:shadow-custom max-custom:w-[270px] max-custom:h-14 max-custom:rounded-[5px] max-custom:w-full uppercase'
                                    }
                                    onClick={() => {
                                        handleActiveTab('Vệ tinh');
                                    }}
                                ></Button>
                            </li>
                            <li className="nav-item">
                                <Button
                                    content="OPENSTREETMAP"
                                    customStyle={
                                        showTab === 'OPENSTREETMAP'
                                            ? 'w-30 !bg-blue-600 hover:shadow-custom rounded-tr-lg rounded-br-lg max-custom:w-[270px] max-custom:h-14 max-custom:w-full max-custom:rounded-[5px] uppercase'
                                            : 'w-30 hover:shadow-custom rounded-tr-lg rounded-br-lg max-custom:w-[270px] max-custom:h-14 max-custom:w-full max-custom:rounded-[5px] uppercase'
                                    }
                                    onClick={() => {
                                        handleActiveTab('OPENSTREETMAP');
                                    }}
                                ></Button>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-[10px]">
                        {showTab === 'Bản đồ Google' && (
                            <div>
                                <div className="search">
                                    <div className="search relative flex items-center">
                                        <i
                                            className="absolute left-3 cursor-pointer"
                                            onClick={() => {
                                                alert('hello');
                                            }}
                                        >
                                            <GoSearch />
                                        </i>
                                        <input
                                            className="w-full bg-[#eeeeee] text-sm p-3 pl-12 border border-gray-300 rounded outline-none focus:bg-white focus:shadow-custom transition duration-300"
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Hay go dieu gi do..."
                                        />
                                    </div>
                                </div>

                                <div className="hidden card-main w-full h-[600px] mb-5 bg-blue">
                                    <div className="map w-full h-full">
                                        <MyMap />
                                    </div>
                                </div>

                                <div className="card-main w-full h-[600px] p-2 my-3 bg-blue">
                                    <div className="map w-full h-full">
                                        <MapComponent />
                                    </div>
                                </div>

                                <div className="card-control cursor-pointer">
                                    {Dropdowns.map((DropdownItem) => {
                                        return (
                                            <Dropdown
                                                key={DropdownItem.title}
                                                DropdownTitle={DropdownItem.title}
                                                Selections={DropdownItem.Selections}
                                                Show={show}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {showTab === 'Vệ tinh' && (
                            <div className="w-full">
                                <MapShapeFile geoJsonData={geoJsonData} />
                            </div>
                        )}

                        {showTab === 'OPENSTREETMAP' && <div className="w-full">OPENSTREETMAP Tab</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
