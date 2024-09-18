import React from 'react';
import Sidebar from './layout/sidebar/Sidebar.jsx';
import Content from './layout/content/Content.jsx';

function App() {
    return (
        <div className="App">
            <div className="wrapper flex w-screen">
                <div className="sidebar-container w-[14%] text-white h-screen shadow-[8px_0_20px_rgba(0,0,0,0.1)] z-10">
                    <Sidebar />
                </div>
                <div className="map-box w-[86%] bg-[#ededed]">
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default App;
