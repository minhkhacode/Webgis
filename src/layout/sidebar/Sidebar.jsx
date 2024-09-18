import React from 'react';
import HeaderComponent from '../../components/HeaderComponent.jsx';

function Sidebar() {
    return (
        <div className="sidebar">
            <HeaderComponent />

            <div className="card-container bottom-0">
                <ul className="tools">
                    <li className="tools-item">Ban do tong quat</li>
                    <li className="tools-item tools-item_footer absolute bottom-0 flex gap-3">
                        <div className="cursor-pointer">Tieng Viet</div>
                        <div className="cursor-pointer">English</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
