function Dropdown({ DropdownTitle, Selections }) {
    return (
        <div className="dropdown mb-[30px] max-custom:w-full">
            <div className="dropdown-list max-custom:[grid justify-items-center]">
                <div className="collapse-title px-[30px] py-[12px] rounded-[0.2rem] border-[#7a7a7a] text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content uppercase bg-[#919191] text-white max-custom:w-full">
                    {DropdownTitle}
                </div>
                <ul className="dropdown-menu px-[20px] py-[15px]">
                    {Selections.map((selection, index) => {
                        return (
                            <li className="selection  max-custom:flex max-custom:justify-center" key={index}>
                                <input
                                    type="checkbox"
                                    id={selection.title}
                                    className="checkbox checkbox-warning mr-3"
                                />
                                <span className="label-text text-[#AAAAAA]" id={selection.title}>
                                    {selection.name}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;
