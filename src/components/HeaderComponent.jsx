import React from 'react';

<<<<<<< HEAD
function HeaderComponent({ title }) {
    return (
        <div
            className="header-component bg-blue-500 bg-opacity-50 shadow-2xl"
            style={{ backgroundColor: '#0d47a1', color: 'white' }}
        >
            <div className="wrapper h-22 py-4 uppercase text-center text-white">{title}</div>
        </div>
    );
=======
function HeaderComponent({ title, fontStyle }) {
    return <div className={`header-component bg-customBlue px-8 py-5 ${fontStyle}`}>{title}</div>;
>>>>>>> main
}

export default HeaderComponent;
