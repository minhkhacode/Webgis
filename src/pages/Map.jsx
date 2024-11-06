import { useState } from 'react';
import { Content, HeaderComponent, Sidebar } from '../layout';

function Map() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <div className="map">
            <div className="wrapper flex w-screen h-screen">
                <Sidebar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isOpen={isSidebarOpen} />
                {/* <HeaderComponent /> */}
                <Content isSidebarOpen={isSidebarOpen} />
            </div>
        </div>
    );
}

export default Map;
