import { useEffect } from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaChartBar } from 'react-icons/fa';
import { FaCodeCompare } from 'react-icons/fa6';
import { FaCodeMerge } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Button, HeaderComponent } from '../../components';
import { clickButton } from '../../features/button/buttonsStatusSlice.jsx';

function Sidebar({ isShowSidebar }) {
    const { t, i18n } = useTranslation();
    const language = useSelector((state) => state.language.language);
    const { sidebarButton } = useSelector((state) => state.button);
    const dispatch = useDispatch();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    return (
        <div
            className={`sidebar flex flex-col bg-[#fff] w-[260px] text-white h-screen shadow-[8px_0_20px_rgba(0,0,0,0.1)] fixed top-0 left-0 z-[9999] transition duration-300 ease-in-out ${
                isShowSidebar ? 'max-custom:translate-x-0' : 'max-custom:-translate-x-full'
            }`}
        >
            <HeaderComponent
                title={t('titleSidebar')}
                fontStyle="uppercase text-[1.15rem] text-[#fff] font-medium leading-[30px] overflow-hidden text-center block whitespace-nowrap w-full"
            />
            <div className="card-container relative flex-grow">
                <ul className="tools mt-5 ">
                    <li className="tools-item w-full px-5 mb-5">
                        <Link to="/">
                            <Button
                                content={t('map')}
                                handleActiveTab={() => dispatch(clickButton('map'))}
                                customStyle={
                                    sidebarButton === 'map'
                                        ? '!bg-[#6186c1] w-full rounded shadow-custom'
                                        : 'w-full rounded shadow-custom'
                                }
                                icon={<MdDashboard />}
                            />
                        </Link>
                    </li>
                    <li className="tools-item w-full px-5 mb-5">
                        <Link to="/chart">
                            <Button
                                content={t('chart')}
                                handleActiveTab={() => dispatch(clickButton('chart'))}
                                customStyle={
                                    sidebarButton === 'chart'
                                        ? '!bg-[#6186c1] w-full rounded shadow-custom'
                                        : 'w-full rounded shadow-custom'
                                }
                                icon={<FaChartBar />}
                            />
                        </Link>
                    </li>
                    <li className="tools-item w-full px-5 mb-5">
                        <Link to="/layermanagement">
                            <Button
                                content={t('layerManagement')}
                                handleActiveTab={() => dispatch(clickButton('compare'))}
                                customStyle={
                                    sidebarButton === 'compare'
                                        ? '!bg-[#6186c1] w-full rounded shadow-custom'
                                        : 'w-full rounded shadow-custom'
                                }
                                icon={<FaCodeCompare />}
                            />
                        </Link>
                    </li>
                    <li className="tools-item w-full px-5 mb-5">
                        <Link to="/test">
                            <Button
                                content={t('Form add layer from NDVI')}
                                handleActiveTab={() => dispatch(clickButton('compare'))}
                                customStyle={
                                    sidebarButton === 'compare'
                                        ? '!bg-[#6186c1] w-full rounded shadow-custom'
                                        : 'w-full rounded shadow-custom'
                                }
                                icon={<FaCodeMerge />}
                            />
                        </Link>
                    </li>
                    <li className="tools-item tools-item_footer w-full flex items-center justify-center gap-5 absolute bottom-2">
                        <div
                            className="mt-2.5 mr-3.75 mb-0 ml-3.75 rounded-sm text-[#3C4858] pl-2.5 pr-2.5 capitalize text-xs py-2.5 px-3.75 cursor-pointer"
                            onClick={() => changeLanguage('vi')}
                        >
                            Tieng Viet
                        </div>
                        <div
                            className="mt-2.5 mr-3.75 mb-0 ml-3.75 rounded-sm text-[#3C4858] pl-2.5 pr-2.5 capitalize text-xs py-2.5 px-3.75 cursor-pointer"
                            onClick={() => changeLanguage('en')}
                        >
                            English
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
