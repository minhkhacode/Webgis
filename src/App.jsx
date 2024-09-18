import React from 'react';
import Sidebar from './layout/sidebar/Sidebar.jsx';
import Content from './layout/content/Content.jsx';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="w-screen flex">
                    <div className="sidebar-container shadow-2xl w-1/5 h-full items-center">
                        <Sidebar />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg w-4/5">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
