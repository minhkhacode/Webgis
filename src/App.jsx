import React from 'react';
import Sidebar from './layout/sidebar/Sidebar.jsx';
import Content from './layout/content/Content.jsx';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="w-screen flex">
                    <div className="sidebar-container columns-3 relative">
                        <Sidebar />
                    </div>
                    <div className="">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
