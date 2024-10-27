/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { GoSearch } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, HeaderComponent, MapShapeFile, Dropdown } from '../../components';
import { toggleNN, togglePNN, toggleTQ } from '../../features/test/testSlice.jsx';
import Dropdowns from '../../dummyData/DropdownsData.js';

function Content({ handleShowSidebar }) {
    const [show, setShow] = useState(false);
    const [isActive, setActivation] = useState('googleMap');
    const [showTab, setShowTab] = useState('googleMap');
    const [PNN, setPNN] = useState(null);
    const [NN, setNN] = useState(null);
    const [TQ, setTQ] = useState(null);
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const { compareLayer } = useSelector((state) => state.layer);

    const handleActiveTab = async (title) => {
        setShowTab(title);
    };

    const handleSetActivation = (value) => {
        setActivation(value);
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

    const handleToggleNN = (e) => {
        dispatch(toggleNN({ ...NN }));
        // console.log(compareLayer);
    };

    const handleTogglePNN = (e) => {
        dispatch(togglePNN({ ...PNN }));
        // console.log(compareLayer);
    };

    const handleToggleTQ = (e) => {
        dispatch(toggleTQ({ ...TQ }));
        // console.log(compareLayer);
    };

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
                        {showTab === 'googleMap' && 'Bản đồ Trường Đại Học Cần Thơ'}
                        {showTab === 'satelliteMap' && 'Bản đồ kết quả phân loại đất của xã Thuận Hòa Sóc Trăng'}
                        {showTab === 'streetMap' && 'OPENSTREETMAP tab'}
                    </h1>
                    <div className="card-nav relative flex items-center justify-between flex-wrap max-custom:block">
                        <ul className="navbar inline-flex overflow-x-hidden py-2 max-custom:block max-custom:gap-y-2">
                            <li className="nav-item">
                                <Button
                                    handleSetActivation={handleSetActivation}
                                    content="googleMap"
                                    handleActiveTab={handleActiveTab}
                                    customStyle={
                                        showTab === 'googleMap' || showTab === 'Bản đồ Google'
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
                    </div>
                    <div className="search">
                        <div className="search relative flex items-center">
                            <i className="absolute left-4 cursor-pointer">
                                <GoSearch />
                            </i>
                            <input
                                className="w-full bg-[#eeeeee] text-sm p-3 pl-12 border border-gray-300 rounded outline-none focus:bg-white focus:shadow-custom transition duration-300"
                                type="text"
                                name=""
                                id=""
                                placeholder={t('inputPlaceHolder')}
                            />
                        </div>
                    </div>

                    <div className="w-full mt-[20px]">
                        <MapShapeFile type={showTab} getJsonDataList={Object.values(compareLayer)} />
                    </div>
                </div>

                <div className="flex justify-start mt-4">
                    <div className="mr-4">
                        <input type="checkbox" onChange={handleTogglePNN} value="PNN" id="PNN" />
                        {/* <CheckBox value={'PNN'} id={'PNN'} /> */}
                        <label className="cursor-pointer px-3 py-2" htmlFor="PNN">
                            PNN
                        </label>
                    </div>
                    <div className="mr-4">
                        <input type="checkbox" onChange={handleToggleNN} value="NN" id="NN" />
                        <label className="cursor-pointer px-3 py-2" htmlFor="NN">
                            NN
                        </label>
                    </div>
                    <div className="mr-4">
                        <input type="checkbox" onChange={handleToggleTQ} value="TQ" id="TQ" />
                        <label className="cursor-pointer px-3 py-2" htmlFor="TQ">
                            TQ
                        </label>
                    </div>
                </div>

                <div className="card-control w-full flex flex-col mt-4 gap-2 cursor-pointer ">
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
            </div>
        </div>
    );
}

export default Content;
