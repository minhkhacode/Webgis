import React from 'react';
import Sidebar from './layout/sidebar/Sidebar.jsx';
import Content from './layout/content/Content.jsx';

function App() {
    return (
        <div className="App">
<<<<<<< HEAD
            <div className="wrapper">
                <div className="w-screen flex">
                    <div className="sidebar-container shadow-2xl w-1/5 h-full items-center">
                        <Sidebar />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg w-4/5">
                        <Content />
                    </div>
=======
            <div className="wrapper flex w-screen">
                <div className="sidebar-container w-[260px] text-white h-screen shadow-[8px_0_20px_rgba(0,0,0,0.1)] z-10 max-custom:invisible">
                    <Sidebar />
                </div>
                <div className="map-box flex-grow bg-[#ededed] max-custom:w-full">
                    <Content />
>>>>>>> main
                </div>
            </div>
        </div>
    );
}

export default App;
