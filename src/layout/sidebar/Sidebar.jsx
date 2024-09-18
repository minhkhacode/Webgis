import React from 'react';
import HeaderComponent from '../../components/HeaderComponent.jsx';

function Sidebar() {
    return (
        <div className="sidebar">
            <HeaderComponent title={'bản đồ ĐHCT'} />

            <div className="card-container bottom-0">
                <ul className="tools mt-3">
                    <li className="tools-item bg-blue-600 bg-opacity-100 mx-3.5 flex cursor-pointer">
                        <span class="material-symbols-outlined mr-4">space_dashboard</span>
                        Bản Đồ Tổng Quan
                    </li>
                    <li className="tools-item tools-item_footer absolute bottom-0 flex gap-3">
                        <div className="cursor-pointer colors-gray-dark">Tiếng Việt</div>
                        <div className="cursor-pointer">English</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
