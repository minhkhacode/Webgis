import React from 'react';

function Button({ content, customStyle, icon }) {
    return (
        <div>
            <button
                class={`bg-customBlue text-white py-3 px-4 flex items-center space-x-2 hover:bg-blue-600 transition duration-300 ${customStyle}`}
            >
                {icon ? <i class="fas fa-arrow-right w-4 h-4">ABC</i> : <></>}
                <span>{content}</span>
            </button>
        </div>
    );
}

export default Button;
