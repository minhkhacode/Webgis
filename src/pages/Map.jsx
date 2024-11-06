import { useState } from 'react';
import { Content, HeaderComponent, Sidebar } from '../layout';

function Map() {
    return (
        <div className="map">
            <div className="wrapper flex w-screen h-screen">
                <Sidebar />
                {/* <HeaderComponent /> */}
                <Content />
            </div>
        </div>
    );
}

export default Map;
