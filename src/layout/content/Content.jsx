/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */

import { FaBars } from 'react-icons/fa6';
import { GoSearch } from 'react-icons/go';

import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import HeaderComponent from '../../components/HeaderComponent';
import MyMap from '../../components/Mymap';

function Content() {
    const Dropdowns = [
        {
            title: 'phòng',
            Selections: [
                {
                    name: 'select1',
                },
                {
                    name: 'select2',
                },
                {
                    name: 'select3',
                },
                {
                    name: 'select4',
                },
            ],
        },
        {
            title: 'ký túc xá',
            Selections: [
                {
                    name: 'select1',
                },
                {
                    name: 'select2',
                },
                {
                    name: 'select3',
                },
                {
                    name: 'select4',
                },
            ],
        },
        {
            title: 'tiện ích',
            Selections: [
                {
                    name: 'select1',
                },
                {
                    name: 'select2',
                },
                {
                    name: 'select3',
                },
                {
                    name: 'select4',
                },
            ],
        },
    ];
    // eslint-disable-next-line no-unused-vars
    // const navBarList = [
    //     {
    //         title: 'Ban do Google',
    //         show: true,
    //     },
    //     {
    //         title: 'VE TINH',
    //         show: false,
    //     },
    //     {
    //         title: 'NDVI vision',
    //         show: false,
    //     },
    // ];

    return (
        <div className="content h-screen overflow-y-scroll max-custom:w-screen">
            <HeaderComponent
                title="Dự án bản đồ trường ĐHCT"
                fontStyle="text-[1rem] text-[#fff] font-light leading-[30px] overflow-hidden text-left block whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-custom:w-full"
                icon={<FaBars className="h-[24px] w-[42px] cursor-pointer" />}
            />
            <div className="card mx-8 my-12 p-4 rounded-lg bg-white">
                <div className="card-header">
                    <h1 className="card-title text-sm text-[#3C4858] font-extralight">Bản đồ Trường Đại Học Cần Thơ</h1>
                    <div className="card-nav">
                        <ul className="navbar inline-flex overflow-x-hidden py-2 max-custom:block max-custom:gap-y-2">
                            <li className="nav-item">
                                <Button
                                    content="Bản đồ Google"
                                    customStyle="w-30 hover:shadow-custom rounded-tl-lg rounded-bl-lg max-custom:w-[270px] max-custom:h-14 max-custom:rounded-[5px] max-custom:w-full uppercase"
                                ></Button>
                            </li>
                            <li className="nav-item">
                                <Button
                                    content="Vệ tinh"
                                    customStyle="w-30 hover:shadow-custom max-custom:w-[270px] max-custom:h-14 max-custom:rounded-[5px] max-custom:w-full uppercase"
                                ></Button>
                            </li>
                            <li className="nav-item">
                                <Button
                                    content="OPENSTREETMAP"
                                    customStyle="w-30 hover:shadow-custom rounded-tr-lg rounded-br-lg max-custom:w-[270px] max-custom:h-14 max-custom:w-full max-custom:rounded-[5px] uppercase"
                                ></Button>
                            </li>
                        </ul>
                    </div>
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

                    <div className="card-main w-full h-[600px] my-5 bg-blue">
                        <div className="map w-full h-full">
                            <MyMap />
                        </div>
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
        </div>
    );
}

export default Content;
