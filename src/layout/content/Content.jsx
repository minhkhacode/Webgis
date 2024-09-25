/* eslint-disable no-unused-vars */
import { useEffect, useState, useMemo } from 'react';
import { FaBars } from 'react-icons/fa6';
import { GoSearch } from 'react-icons/go';
import { FaCheck } from 'react-icons/fa';

import Button from '../../components/Button';
import DropdownPC from '../../components/DropdownPC.jsx';
import HeaderComponent from '../../components/HeaderComponent';
import MapComponent from '../../components/maps/MapComponent.jsx';
import MapShapeFile from '../../components/maps/MapShapeFile';
import { change } from '../../features/counter/geoJSONDataListSlice/geoJSONDataListSlice.jsx';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

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

const DropDownLaneUseType = [
    {
        value: 'Phi nông nghiệp',
        selected: false,
        path: '/PNN.geojson',
    },
    {
        value: 'Nông nghiệp',
        selected: false,
        path: '/NN.geojson',
    },
    {
        value: 'Thổ quả',
        selected: false,
        path: '/TQ.geojson',
    },
];

function Content({ handleShowSidebar }) {
    // eslint-disable-next-line no-unused-vars
    const [show, setShow] = useState(false);
    const [isActive, setActivation] = useState('googleMap');
    const [showTab, setShowTab] = useState('Bản đồ Google');
    const [PNN, setPNN] = useState(null);
    const [NN, setNN] = useState(null);
    const [TQ, setTQ] = useState(null);
    const [geoJSONDataList, setGeoJSONDataList] = useState([]);
    const [dropdownLaneUseType, setDropdownLaneUseType] = useState(DropDownLaneUseType);

    const dispatch = useDispatch();
    const { t, il8n } = useTranslation();

    const navBarList = {
        googleMap: <MapComponent></MapComponent>,
        satelliteMap: <MapShapeFile getGeoJSONDataList={geoJSONDataList}></MapShapeFile>,
        streetMap: <MapComponent></MapComponent>,
    };

    const handleActiveTab = async (title) => {
        setShowTab(title);
    };

    const handleSetActivation = (value) => {
        setActivation(value);
    };

    const handleAddGeoJSONDataList = async (path) => {
        await fetch(path);
    };

    const handleRemoveGeoJSONDataList = (landUseType) => {
        const index = geoJSONDataList.indexOf(landUseType);
        const newGeoJSONDataList = geoJSONDataList.filter((item, i) => i !== index);
        setGeoJSONDataList(newGeoJSONDataList);
    };

    const handleChangeSelected = (itemCheck) => {
        setDropdownLaneUseType((prev) =>
            prev.map((item) => (item.path === itemCheck.path ? { ...item, selected: !item.selected } : item)),
        );

        if (itemCheck.selected === true) {
            handleRemoveGeoJSONDataList(itemCheck.value);
        }
        if (itemCheck.selected === false) {
            handleChangeGeoJSONDataList(itemCheck.path);
        }
    };

    const checkLandUseTypeByPath = (path) => {
        switch (path) {
            case '/PNN.geojson':
                return PNN;
            case '/NN.geojson':
                return NN;
            case '/TQ.geojson':
                return TQ;
            default:
                return null;
        }
    };

    const handleChangeGeoJSONDataList = (path) => {
        const landUseType = checkLandUseTypeByPath(path);
        // console.log(landUseType);

        !geoJSONDataList.includes(landUseType)
            ? setGeoJSONDataList([...geoJSONDataList, landUseType])
            : handleRemoveGeoJSONDataList(landUseType);
        dispatch(change(...geoJSONDataList));
        // console.log(geoJSONDataList);
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
                    {showTab === 'googleMap' && (
                        <div className="w-full">
                            <MapComponent />
                        </div>
                    )}
                    {showTab === 'satelliteMap' && (
                        <div className="w-full">
                            <MapShapeFile getJsonDataList={geoJSONDataList} />
                            <div className="mt-[20px]" />
                            <div className="card-control cursor-pointer">
                                {DropDownLaneUseType.map((item) => {
                                    return (
                                        <li className="selection" key={item.path}>
                                            <label className="flex items-center space-x-2 my-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="hidden peer"
                                                    value={item.selected}
                                                    onClick={() => {
                                                        handleChangeSelected(item);
                                                    }}
                                                />
                                                <div className="w-4 h-4 bg-gray-200 border-2 border-gray-300 flex items-center justify-center peer-checked:bg-customBlue peer-checked:border-customBlue peer-focus:ring peer-focus:ring-blue-400">
                                                    <div className="w-2 h-2 text-white peer-checked:block flex items-center justify-center">
                                                        <FaCheck />
                                                    </div>
                                                </div>
                                                <span className="text-gray-900">{item.value}</span>
                                            </label>
                                        </li>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {/* <div className="card-main w-full h-[600px] p-2 my-3 bg-blue">
                        <div className="map w-full h-full">{navBarList[isActive]}</div>
                    </div> */}

                    {/* <div className="hidden mid-custom:block card-control cursor-pointer">
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
                    </div> */}
                    {showTab === 'streetMap' && (
                        <div className="w-full">
                            <MapComponent />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Content;
