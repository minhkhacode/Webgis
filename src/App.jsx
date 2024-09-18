import React from 'react';
import Sidebar from './layout/sidebar/Sidebar.jsx';
import Content from './layout/content/Content.jsx';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="w-screen flex">
                    <div className="sidebar-container w-1/4 relative">
                        <Sidebar />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg w-3/4">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
