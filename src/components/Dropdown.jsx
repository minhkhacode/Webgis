import React from 'react';

function Dropdown({ DropdownTitle, Selections }) {
    return (
        <div className="dropdown">
            <div className="dropdown-list">
                <h1 className="dropdown-title">{DropdownTitle}</h1>
                <ul className="dropdown-menu">
                    {Selections.map((selection, index) => {
                        return <li className="selection" key={index}>

                        </li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;
