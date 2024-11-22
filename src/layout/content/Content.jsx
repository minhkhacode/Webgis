/* eslint-disable no-unused-vars */
// import axios from 'axios';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

<<<<<<< HEAD
import { Button, HeaderComponent, MapShapeFile, Dropdown } from '../../components';
import { toggleNN, togglePNN, toggleTQ } from '../../features/test/testSlice.jsx';
import InputPrediction from '../../components/InputPredictionComponent.jsx';
=======
import { HeaderComponent, MapShapeFile } from '../../components';

import InputPrediction from '../../components/inputPrediction/InputPredictionComponent.jsx';

// import InputPrediction from '../../components/inputPrediction/InputPredictionComponent.jsx';
import LayerSelector from '../../components/LayerSelector/LayerSelector.jsx';
import { selectSidebarStatus } from '../../features/setting/settingSlice.jsx';
import ChartTab from '../../components/charts/ChartTab.jsx';
>>>>>>> main

function Content() {
    const { t } = useTranslation();
    const [isPredictFormOpen, setIsPredictFormOpen] = useState(false);
<<<<<<< HEAD
    const dispatch = useDispatch();
=======

    // const dispatch = useDispatch();
>>>>>>> main
    const { compareLayer } = useSelector((state) => state.layer);
    const isSidebarOpen = useSelector(selectSidebarStatus);

<<<<<<< HEAD
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

    const handleOpenPredictForm = () => {
        setIsPredictFormOpen(!isPredictFormOpen);
    };

    return (
        <div
            className={`content relative right-0 h-full w-full transition-all duration-300 ${
                isSidebarOpen ? 'w-[calc(100%-400px)]' : 'w-full'
            }`}
        >
            {/* <HeaderComponent
                handleShowSidebar={handleShowSidebar}
                title={t('titleCTU')}
                fontStyle=" text-[1rem] text-[#fff] font-light leading-[30px] overflow-hidden text-left block whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-custom:w-full"
                icon={<FaBars className="h-6 w-6 cursor-pointer" />}
            /> */}
            <div className="card rounded-lg">
                <div className="card-header">
                    {/* <h1 className="card-title text-sm text-[#3C4858] font-extralight font-[500]">
                        {showTab === 'googleMap' && 'Bản đồ Trường Đại Học Cần Thơ'}
                        {showTab === 'satelliteMap' && 'Bản đồ kết quả phân loại đất của xã Thuận Hòa Sóc Trăng'}
                        {showTab === 'streetMap' && 'OPENSTREETMAP tab'}
                    </h1> */}
                    {/* <div className="card-nav relative flex items-center justify-between flex-wrap max-custom:block mid-custom:mb-3">
                        <ul className="navbar flex py-2 max-custom:block max-custom:gap-y-2 mid-custom:w-full">
                            <li className="nav-item flex-grow">
                                <Button
                                    handleSetActivation={handleSetActivation}
                                    content="googleMap"
                                    handleActiveTab={handleActiveTab}
                                    customStyle={
                                        showTab === 'googleMap'
                                            ? 'w-full !bg-[#6186c1] hover:shadow-custom rounded-tl-lg rounded-bl-lg max-custom:h-14 max-custom:rounded-[5px] uppercase justify-center'
                                            : 'w-full hover:shadow-custom rounded-tl-lg rounded-bl-lg max-custom:h-14 max-custom:rounded-[5px] uppercase justify-center'
                                    }
                                ></Button>
                            </li>
                            <li className="nav-item flex-grow">
                                <Button
                                    handleSetActivation={handleSetActivation}
                                    content="satelliteMap"
                                    handleActiveTab={handleActiveTab}
                                    customStyle={
                                        showTab === 'satelliteMap'
                                            ? 'w-full !bg-[#6186c1] hover:shadow-custom max-custom:h-14 max-custom:rounded-[5px] uppercase justify-center'
                                            : 'w-full hover:shadow-custom max-custom:h-14 max-custom:rounded-[5px] uppercase justify-center'
                                    }
                                ></Button>
                            </li>
                            <li className="nav-item flex-grow">
                                <Button
                                    handleSetActivation={handleSetActivation}
                                    content="streetMap"
                                    handleActiveTab={handleActiveTab}
                                    customStyle={
                                        showTab === 'streetMap'
                                            ? 'w-full !bg-[#6186c1] hover:shadow-custom rounded-tr-lg rounded-br-lg max-custom:h-14 max-custom:rounded-[5px] uppercase justify-center'
                                            : 'w-full hover:shadow-custom rounded-tr-lg rounded-br-lg max-custom:h-14 max-custom:rounded-[5px] uppercase justify-center'
                                    }
                                ></Button>
                            </li>
                        </ul>
                        <button
                            onClick={handleOpenPredictForm}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md mid-custom:w-full sm:w-auto"
                        >
                            Mở Form Dự Đoán
                        </button>
                        {isPredictFormOpen && <InputPrediction handleOpenPredictForm={handleOpenPredictForm} />}
                    </div> */}

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
                    <HeaderComponent />

                    {/* <div className="w-full h-full">
                        <LayerSelector />
                        <MapShapeFile getJsonDataList={Object.values(compareLayer)} />
                        <ChartTab />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Content;
