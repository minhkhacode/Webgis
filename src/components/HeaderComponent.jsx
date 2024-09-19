import React from 'react';

function HeaderComponent({ title, fontStyle, icon }) {
    return (
        <div className={`${fontStyle} header-component relative bg-customBlue px-8 py-5 flex align-center font-thin`}>
            {title}
            <div className="hidden absolute right-[10px] max-custom:block">{icon ? icon : <></>}</div>
        </div>
    );
}

export default HeaderComponent;
