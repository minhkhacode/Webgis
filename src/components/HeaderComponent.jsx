import React from 'react';

function HeaderComponent({ title }) {
    return (
        <div
            className="header-component bg-blue-500 bg-opacity-50 shadow-2xl"
            style={{ backgroundColor: '#0d47a1', color: 'white' }}
        >
            <div className="wrapper h-22 py-4 uppercase text-center text-white">{title}</div>
        </div>
    );
}

export default HeaderComponent;
