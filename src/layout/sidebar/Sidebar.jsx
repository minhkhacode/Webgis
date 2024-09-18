import React from 'react';
import HeaderComponent from '../../components/HeaderComponent.jsx';

function Sidebar() {
    return (
        <div className="sidebar">
            <HeaderComponent/>
            
            <div className="card-container">
                <ul className="tools">
                    <li className="tools-item">Ban do tong quat</li>
                    <li className="tools-item tools-item_footer">
                        <div>Tieng Viet</div>
                        <div>English</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
