import React from 'react';

function HeaderComponent({ title, fontStyle }) {
    return <div className={`header-component bg-customBlue px-8 py-5 ${fontStyle}`}>{title}</div>;
}

export default HeaderComponent;
