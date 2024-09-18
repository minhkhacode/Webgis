/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */

import className from 'classnames/bind';
import Dropdown from '../../components/Dropdown';
import HeaderComponent from '../../components/HeaderComponent';

import styles from './content.module.css';

const cx = className.bind(styles);

function Content() {
    const Dropdowns = [
        {
            title: 'hello',
            Selections: [
                {
                    name: 'abc',
                },
            ],
        },
        {
            title: 'hello1',
            Selections: [
                {
                    name: 'abc',
                },
            ],
        },
        {
            title: 'hello2',
            Selections: [
                {
                    name: 'abc',
                },
            ],
        },
    ];

    // eslint-disable-next-line no-unused-vars
    const navBarList = [
        {
            title: 'Ban do Google',
            show: true,
        },
        {
            title: 'VE TINH',
            show: false,
        },
        {
            title: 'NDVI vision',
            show: false,
        },
    ];

    return (
        <div className="content">
            <HeaderComponent title={'dự án bản đồ trường ĐHCT'} />
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title"></h1>
                    <div className="card-nav">
                        <ul className="flex gap-x-4 cursor-pointer">
                            {navBarList.map((item) => {
                                return (
                                    <li className={cx('nav-item')} key={item.title}>
                                        {item.title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="search">
                        <i></i>
                        <input type="text" name="" id="" placeholder="Hãy gõ điều gì đó..." />
                    </div>
                </div>

                <div className="card-main">
                    <div className="map"></div>
                </div>

                <div className="card-control">
                    {Dropdowns.map((DropdownItem) => {
                        // console.log(DropdownItem);

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
