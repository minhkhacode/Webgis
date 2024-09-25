import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

function Dropdown({ DropdownTitle, Selections, childrents }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [show, setShow] = useState(false);

    // const handleShow = () => {
    //     setShow(!show);
    // };
    return (
        <div className="dropdown">
            <div className="dropdown-list relative">
                <h1
                    className="dropdown-title w-full bg-[#999999] px-4 py-3 rounded text-white cursor-pointer hover:bg-[#888888] transition duration-300"
                    onClick={toggleDropdown}
                >
                    {DropdownTitle}
                </h1>
                <ul
                    className={`dropdown-menu absolute z-10 bg-[#fff] right-0 px-10  my-2 rounded-xl shadow-custom transition-all duration-300 overflow-hidden ${
                        isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{ transition: 'max-height 0.3s ease, opacity 0.3s ease' }}
                >
                    {Selections.map((selection, index) => {
                        return (
                            <li className="selection" key={index}>
                                <label className="flex items-center space-x-2 my-2 cursor-pointer">
                                    <input type="checkbox" className="hidden peer" />
                                    <div className="w-4 h-4 bg-gray-200 border-2 border-gray-300 flex items-center justify-center peer-checked:bg-customBlue peer-checked:border-customBlue peer-focus:ring peer-focus:ring-blue-400">
                                        <div className="w-2 h-2 text-white peer-checked:block flex items-center justify-center">
                                            <FaCheck />
                                        </div>
                                    </div>
                                    <span className="text-gray-900">{selection.value}</span>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;
