/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { GoSearch } from 'react-icons/go';

import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import HeaderComponent from '../../components/HeaderComponent';
import MyMap from '../../components/maps/Mymap';
import MapComponent from '../../components/maps/MapComponent.jsx';
import MapShapeFile from '../../components/maps/MapShapeFile';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import DropdownPC from '../../components/DropdownPC.jsx';

function Content({ handleShowSidebar }) {
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);
    const [showTab, setShowTab] = useState('googleMap');
    const [geoJsonData, setGeoJsonData] = useState(null);
    const CRS = useSelector((state) => state.CRS.CRS);
    const [dropdownLaneUseType, setDropdownLaneUseType] = useState(DropDownLaneUseType);

    const Dropdowns = [
        {
            title: 'crs',
            Selections: [...CRS],
        },
        {
            title: 'year',
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
            title: 'month',
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

    const navBarList = {
        googleMap: <MapComponent></MapComponent>,
        satelliteMap: <MapShapeFile geoJsonData={geoJsonData}></MapShapeFile>,
        streetMap: <MapComponent></MapComponent>,
    };

    const handleActiveTab = async (title) => {
        setShowTab(title);
    };

    const handleAddGeoJSONDataList = async (path) => {
        await fetch(path)
      
    const [isActive, setActivation] = useState('googleMap');

    const handleSetActivation = (value) => {
        setActivation(value);
    };

    useEffect(() => {
        fetch('/KQPL.geojson')
            .then((response) => response.json())
            .then((data) => setGeoJSONDataList([...geoJSONDataList, data]))
            .catch((error) => console.error('Error loading GeoJSON:', error));
    };

    const handleRemoveGeoJSONDataList = (type) => {
        setGeoJSONDataList(geoJSONDataList.filter((item) => item.features.type !== type));
    };

    const handleChangeDropDownTypeUseType = () => {};

    const handleValueChange = (value) => {
        setTypeLandUseData(value);
        console.log(typeLandUseData);
    };

    // useEffect(() => {
    // fetch('/PNN.geojson')
    //     .then((response) => response.json())
    //     .then((data) => setGeoJSONDataList([...geoJSONDataList, data]))
    //     .catch((error) => console.error('Error loading GeoJSON:', error));
    // fetch('/NN.geojson')
    //     .then((response) => response.json())
    //     // .then((data) => setGeoJsonData2(data))
    //     .then((data) => setGeoJSONDataList([...geoJSONDataList, data]))
    //     .catch((error) => console.error('Error loading GeoJSON:', error));
    // fetch('/TQ.geojson')
    //     .then((response) => response.json())
    //     // .then((data) => setGeoJsonData3(data))
    //     .then((data) => setGeoJSONDataList([...geoJSONDataList, data]))
    //     .catch((error) => console.error('Error loading GeoJSON:', error));
    // }, []);

    // useEffect(() => {
    //     fetch('/NN.geojson')
    //         .then((response) => response.json())
    //         .then((data) => setGeoJSONDataList([...geoJSONDataList, data]))
    //         .catch((error) => console.error('Error loading GeoJSON:', error));
    // }, []);

    return (
        <div className="content max-custom:w-screen relative">
            <HeaderComponent
                handleShowSidebar={handleShowSidebar}
                title={t('titleCTU')}
                fontStyle=" text-[1rem] text-[#fff] font-light leading-[30px] overflow-hidden text-left block whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-custom:w-full"
                icon={<FaBars className="h-6 w-6 cursor-pointer" />}
            />
            <div className="card mx-8 my-12 p-4 rounded-lg bg-white">
                <div className="card-header">
                    <h1 className="card-title text-sm text-[#3C4858] font-extralight font-[500]">
                        {showTab === 'Bản đồ Google' && 'Bản đồ Trường Đại Học Cần Thơ'}
                        {showTab === 'Vệ tinh' && 'Bản đồ kết quả phân loại đất của xã Thuận Hòa Sóc Trăng'}
                        {showTab === 'OPENSTREETMAP' && 'OPENSTREETMAP tab'}
                    </h1>
                    <div className="card-nav relative flex items-center justify-between flex-wrap max-custom:block">
                        <ul className="navbar inline-flex overflow-x-hidden py-2 max-custom:block max-custom:gap-y-2">
                            <li className="nav-item">
                                <Button
                                    handleSetActivation={handleSetActivation}
                                    content="googleMap"
                                    handleActiveTab={handleActiveTab}
                                    customStyle={

                                        showTab === 'googleMap'
                                            ? 'w-30 !bg-[#6186c1] hover:shadow-custom rounded-tl-lg rounded-bl-lg max-custom:w-[270px] max-custom:h-14 max-custom:rounded-[5px] max-custom:w-full uppercase'
                                            : 'w-30 hover:shadow-custom rounded-tl-lg rounded-bl-lg max-custom:w-[270px] max-custom:h-14 max-custom:rounded-[5px] max-custom:w-full uppercase'
                                    }
                                ></Button>
                            </li>
                            <li className="nav-item">
                                <Button
                                    handleSetActivation={handleSetActivation}
                                    content="satelliteMap"
                                    handleActiveTab={handleActiveTab}
                                    customStyle={

                                        showTab === 'satelliteMap'
                                            ? 'w-30 !bg-[#6186c1] hover:shadow-custom max-custom:w-[270px] max-custom:h-14 max-custom:rounded-[5px] max-custom:w-full uppercase'
                                            : 'w-30 hover:shadow-custom max-custom:w-[270px] max-custom:h-14 max-custom:rounded-[5px] max-custom:w-full uppercase'
                                    }
                                ></Button>
                            </li>
                            <li className="nav-item">
                                <Button
                                    handleSetActivation={handleSetActivation}
                                    content="streetMap"
                                    handleActiveTab={handleActiveTab}
                                    customStyle={
                                        showTab === 'streetMap'
                                            ? 'w-30 !bg-[#6186c1] hover:shadow-custom rounded-tr-lg rounded-br-lg max-custom:w-[270px] max-custom:h-14 max-custom:w-full max-custom:rounded-[5px] uppercase'
                                            : 'w-30 hover:shadow-custom rounded-tr-lg rounded-br-lg max-custom:w-[270px] max-custom:h-14 max-custom:w-full max-custom:rounded-[5px] uppercase'
                                    }
                                ></Button>
                            </li>
                        </ul>

                        <div className="card-control w-[450px] flex justify-end items-center gap-2 cursor-pointer mid-custom:hidden ">
                            {Dropdowns.map((DropdownItem) => {
                                return (
                                    <DropdownPC
                                        key={DropdownItem.title}
                                        DropdownTitle={t(DropdownItem.title)}
                                        Selections={DropdownItem.Selections}
                                        Show={show}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className="search">
                        <div className="search relative flex items-center">
                            <i
                                className="absolute left-4 cursor-pointer"
                                onClick={() => {
                                    alert('hello');
                                }}
                            >
                                <GoSearch />
                            </i>
                            <input
                                className="w-full rounded-lg bg-[#eeeeee] text-sm p-3 pl-12 border border-gray-300 rounded outline-none focus:bg-white focus:shadow-custom transition duration-300"
                                type="text"
                                name=""
                                id=""
                                placeholder={t('inputPlaceHolder')}
                            />
                        </div>
                    </div>
                        {showTab === 'Vệ tinh' && (
                            <div className="w-full">
                                <MapShapeFile
                                    // geoJsonData={geoJsonData}
                                    // geoJsonData2={geoJsonData2}
                                    // geoJsonData3={geoJsonData3}
                                    getJsonDataList={geoJSONDataList}
                                />

                                <div className="mt-[20px]" />
                                <div className="card-control cursor-pointer">
                                    <Dropdown
                                        DropdownTitle={'Land use type'}
                                        Selections={DropDownLaneUseType}
                                        Show={show}
                                        onValueChange={handleValueChange}
                                    />
                                </div>
                            </div>
                        )}
                    <div className="card-main w-full h-[600px] p-2 my-3 bg-blue">
                        <div className="map w-full h-full">{navBarList[isActive]}</div>
                    </div>

                    <div className="hidden mid-custom:block card-control cursor-pointer">
                        {Dropdowns.map((DropdownItem) => {
                            return (
                                <Dropdown
                                    key={DropdownItem.title}
                                    DropdownTitle={t(DropdownItem.title)}
                                    Selections={DropdownItem.Selections}
                                    Show={show}
                                />
                            );
                        })}
                    </div>
                    {showTab === 'OPENSTREETMAP' && <div className="w-full">OPENSTREETMAP Tab</div>}
                </div>
            </div>
        </div>
    );
}

export default Content;
