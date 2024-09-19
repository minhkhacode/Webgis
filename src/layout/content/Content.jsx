import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import HeaderComponent from '../../components/HeaderComponent';
import { IoSearchOutline } from 'react-icons/io5';

function Content() {
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

    return (
        <div className="content h-screen overflow-y-scroll">
            <HeaderComponent
                title="Dự án bản đồ trường ĐHCT"
                fontStyle="text-[1rem] text-[#fff] font-light leading-[30px] overflow-hidden text-left block whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            />
            <div className="card mx-8 my-12 p-4 rounded-lg bg-white">
                <div className="card-header">
                    <h1 className="card-title text-sm text-[#3C4858]">Bản đồ Trường Đại Học Cần Thơ</h1>
                    <div className="card-nav">
                        <ul className="navbar inline-flex overflow-x-hidden py-4">
                            <li className="nav-item">
                                <Button
                                    content="Bản đồ ĐHCT"
                                    customStyle="w-30 hover:shadow-custom rounded-tl-lg rounded-bl-lg"
                                ></Button>
                            </li>
                            <li className="nav-item">
                                <Button content="Vệ tinh" customStyle="w-30 hover:shadow-custom"></Button>
                            </li>
                            <li className="nav-item">
                                <Button
                                    content="OPENSTREETMAP"
                                    customStyle="w-30 hover:shadow-custom rounded-tr-lg rounded-br-lg"
                                ></Button>
                            </li>
                        </ul>
                    </div>
                    <div className="search relative flex items-center relative">
                        <div className="text-2xl absolute left-4">
                            <IoSearchOutline />
                        </div>
                        <input
                            className="w-full bg-[#eeeeee] text-sm p-3 pl-12 border border-gray-300 rounded-xl outline-none focus:bg-white focus:shadow-custom transition duration-300"
                            type="text"
                            name=""
                            id=""
                            placeholder="Hay go dieu gi do..."
                        />
                    </div>
                </div>

                <div className="card-main w-full h-[600px] m-4 bg-blue">
                    <div className="map w-full h-full">map</div>
                </div>

                <div className="card-control">
                    {Dropdowns.map((DropdownItem) => {
                        return (
                            <Dropdown
                                key={DropdownItem.title}
                                DropdownTitle={DropdownItem.title}
                                Selections={DropdownItem.Selections}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Content;
