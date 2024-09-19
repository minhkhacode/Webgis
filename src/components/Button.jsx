import React from 'react';

function Button({ content, customStyle, icon }) {
    return (
        <div>
            <button
                className={`bg-customBlue text-white py-3 px-4 flex items-center space-x-2 hover:bg-blue-600 transition duration-300 ${customStyle}`}
            >
                {icon ? icon : <></>}
                <span>{content}</span>
            </button>
        </div>
    );
}

export default Button;
