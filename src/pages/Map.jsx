import { useState } from 'react';
import { Content, Sidebar } from '../layout';

function Map() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (
        <div className="map ">
            <div className="wrapper relative flex w-screen h-screen">
                <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
                <Content toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            </div>
        </div>
    );
}

export default Map;
