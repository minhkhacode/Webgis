/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

function Dropdown({ DropdownTitle, Selections, Show }) {
    const [show, setShow] = useState(Show);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <div
                className="bg-[#919191] text-[#fff] font-extralight text-xs uppercase rounded-[0.2rem] py-[12px] px-[30px] my-[5px] mx-[1px] focus:shadow-2xl"
                onClick={() => {
                    handleShow();
                }}
            >
                {DropdownTitle}
            </div>
            <div
                className={
                    show === true ? 'show text-black transition-opacity duration-500 ease-in-out mb-[8px]' : 'hidden'
                }
            >
                <div className="rounded-[6px] shadow-2xl">
                    <ul className="pl-[40px]">
                        {Selections.map((item) => {
                            return (
                                <li className="row items-center pb-[8px] content-center" key={item.name}>
                                    <div className="inline-flex items-center mr-[6px]">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input
                                                type="checkbox"
                                                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-800 checked:border-slate-800"
                                                id={item.name}
                                            />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3.5 w-3.5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeWidth="1"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <label className="font-[200] text-[#AAAAAA] size-[14px]" htmlFor={item.name}>
                                        {item.name}
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Dropdown;
