import React from 'react';
import Sidebar from './layout/sidebar/Sidebar.jsx';
import Content from './layout/content/Content.jsx';

function App() {
    return (
        <div className="App">
            <div className="wrapper flex w-screen max-custom:block max-custom:h-auto">
                <div className="sidebar-container w-[260px] text-white h-screen shadow-[8px_0_20px_rgba(0,0,0,0.1)] z-10 max-custom:hidden">
                    <Sidebar />
                </div>
                <div className="map-box flex-grow bg-[#ededed] max-custom:w-full">
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default App;
