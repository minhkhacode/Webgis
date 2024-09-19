import daisyui from 'daisyui';

function Dropdown({ DropdownTitle, Selections }) {
    return (
        <div className="dropdown ">
            <div className="dropdown-list">
                <div className="collapse-title px-[30px] py-[12px] rounded-[0.2rem] border-[#7a7a7a] text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content uppercase bg-[#919191] text-white max-custom:w-full">
                    {DropdownTitle}
                </div>
                <ul className="dropdown-menu">
                    {Selections.map((selection, index) => {
                        return (
                            <li className="selection" key={index}>
                                {selection.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;
