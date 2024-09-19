import React from 'react';

function HeaderComponent({ title, fontStyle, icon }) {
    return (
        <div className={`header-component relative bg-customBlue px-8 py-5 ${fontStyle} flex align-center`}>
            {title}
            <div className="absolute right-[10px]">{icon ? icon : <></>}</div>
        </div>
    );
}

export default HeaderComponent;
