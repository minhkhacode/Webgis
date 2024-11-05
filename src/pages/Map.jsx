import { useState } from 'react';
import { Content, HeaderComponent } from '../layout';

function Map() {
    const [isShowSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = () => {
        setShowSidebar(!isShowSidebar);
    };

    return (
        <div className="map">
            <div className="wrapper flex w-screen h-screen">
                <HeaderComponent />
                <Content handleShowSidebar={handleShowSidebar} />
            </div>
        </div>
    );
}

export default Map;
