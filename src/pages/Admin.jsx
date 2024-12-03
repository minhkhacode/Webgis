/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { motion } from 'framer-motion';
import { LuFileEdit, LuTrash2 } from 'react-icons/lu';

import '../index.css';

const auth_key = localStorage.getItem('authToken');
const config = {
    headers: {
        Authorization: `Bearer ${auth_key}`, // Use "Bearer" or appropriate schema
    },
};

const dropdownVariants = {
    open: {
        opacity: 1,
        scaleY: 1,
        originY: 0,

        clipPath: 'inset(0% 0% 0% 0% round 10px)',
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
        },
    },
    closed: {
        opacity: 0,
        scaleY: 0,
        originY: 0,

        clipPath: 'inset(10% 50% 90% 50% round 10px)',
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3,
        },
    },
};

const title_table = [
    {
        action: 'Id',
    },
    {
        action: 'Title',
    },
    {
        action: 'workspace',
    },
    {
        action: 'Actions',
    },
    // {
    //     action: 'Export',
    // },
];

const list_exports = [
    {
        name: 'GeoJSON',
    },
    {
        name: 'PNG',
    },
    {
        name: 'tif',
    },
    {
        name: 'shape file',
    },
    {
        name: 'text',
    },
];

function Map() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState();
    const [listLayers, setListLayers] = useState([]);
    const [listWorkspace, setListWorkspace] = useState([]);
    const [isOpen, setIsOpen] = useState([]);
    const [selectedOption, setSelectedOption] = useState('Select an option');

    const navigate = useNavigate();

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleReturnMapPage = () => {
        navigate('/');
    };

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8088/api/layers/get_all_layers/', config)
            .then((response) => setListLayers(response.data.data.layers));

        axios
            .get('http://127.0.0.1:8088/api/layers/get_workspaces/', config)
            .then((response) => setListWorkspace(response.data));
    }, []);

    return (
        <div className="admin">
            <div className="wrapper flex w-screen bg-[#ededed] ">
                <div className="bg-[#fff] flex-grow relative max-custom:ml-0">
                    <div className="flex flex-col items-center justify-center min-h-screen bg-[#536489]">
                        <div className="flex gap-[40px]">
                            <motion.div
                                className="box "
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <button
                                    className="uppercase font-bold bg-[#1F2739] mb-[40px] text-[#fff] rounded-xl h-[60px] w-auto px-[15px]"
                                    onClick={onOpenModal}
                                >
                                    add layer to server
                                </button>
                            </motion.div>
                            <motion.div
                                className="box "
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <button
                                    className="uppercase font-bold bg-[#1F2739] mb-[40px] text-[#fff] rounded-xl h-[60px] w-auto px-[15px]"
                                    onClick={handleReturnMapPage}
                                >
                                    Return The Map
                                </button>
                            </motion.div>
                        </div>
                        <Modal open={open} center onClose={onCloseModal}>
                            <div className="uppercase text-center font-bold mb-[25px]">Update layer</div>
                            <form className="h-auto align-middle flex flex-col items-center">
                                <label htmlFor="workspace">Name</label>

                                <input
                                    className="w-[400px] border-[2px] h-[40px] pl-[5px] mb-[15px]"
                                    type="text"
                                    value={name}
                                    onChange={() => {
                                        setName(name);
                                    }}
                                />
                                <label htmlFor="workspace">Title</label>

                                <input
                                    className="w-[400px] border-[2px] h-[40px] pl-[5px] mb-[15px]"
                                    type="text"
                                    value={name}
                                    onChange={() => {
                                        setName(name);
                                    }}
                                />
                                <label htmlFor="workspace">Workspace</label>
                                <input
                                    className="w-[400px] border-[2px] h-[40px] pl-[5px] mb-[15px]"
                                    type="select"
                                    value={name}
                                    onChange={() => {
                                        setName(name);
                                    }}
                                    id="workspace"
                                />
                                <button className="uppercase w-[100px] h-[50px] rounded-[7px] bg-[#1F2739] text-[#fff] hover:bg-[#fff] hover:text-[black] hover:shadow-md custom-td-hover">
                                    Update
                                </button>
                            </form>
                        </Modal>

                        <table className="container rounded-[20px]">
                            <thead className="rounded-xl">
                                <tr className="odd:bg-[#323C50]">
                                    {title_table.map((item) => {
                                        return (
                                            <th
                                                className="pt-[2%] pb-[2%] pl-[2%] bg-[#1F2739] p-2 text-left"
                                                key={item.action}
                                            >
                                                <h1 className="text-[#185875] uppercase">{item.action}</h1>
                                            </th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {listLayers.map((item) => {
                                    return (
                                        <tr
                                            className="w-auto odd:bg-[#323C50] even:bg-[#2C3446] hover:bg-[#464A52] hover:shadow-md"
                                            key={item.id}
                                        >
                                            <td className="custom-td-hover p-4 text-[#FB667A]">{item.id}</td>
                                            <td className="custom-td-hover p-4 text-[#FB667A]">{item.id}</td>
                                            <td className="custom-td-hover p-4 text-[#FB667A]">{item.workspace}</td>
                                            <td className="text-[#fff] relative uppercase">
                                                <div className="custom-td-hover-edit absolute cursor-pointer w-[40%] h-[100%] top-0 left-0 flex items-center justify-center">
                                                    <LuFileEdit className="h-[20px] w-[20px]" />
                                                </div>
                                                <div className="custom-td-hover-delete absolute cursor-pointer w-[40%] h-[100%] top-0 right-0 flex items-center justify-center">
                                                    <LuTrash2 className="h-[20px] w-[20px]" />
                                                </div>
                                            </td>
                                            {/* <td className="align-middle text-center items-center relative">
                                                <div className="dropdown-container absolute top-[20px] left-[25px] ">
                                                    <motion.button
                                                        onClick={() => setIsOpen(!isOpen)}
                                                        whileTap={{ scale: 0.97 }}
                                                        className="dropdown-button text-center text-[#fff] uppercase flex"
                                                    >
                                                        <motion.div
                                                            className="box "
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                                        >
                                                            select one
                                                        </motion.div>
                                                        <motion.div
                                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            style={{ display: 'inline-block', marginLeft: 8 }}
                                                        >
                                                            <svg
                                                                className="ml-[5px]"
                                                                width="15"
                                                                height="15"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M0 7 L 20 7 L 10 16" />
                                                            </svg>
                                                        </motion.div>
                                                    </motion.button>
                                                    <motion.ul
                                                        className="dropdown"
                                                        initial="closed"
                                                        animate={isOpen ? 'open' : 'closed'}
                                                        variants={dropdownVariants}
                                                    >
                                                        {list_exports.map((option) => (
                                                            <motion.li
                                                                key={option.name}
                                                                onClick={() => handleOptionSelect(option.name)}
                                                                whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                                                                className="dropdown-item bg-[#fff]"
                                                            >
                                                                {option.name}
                                                            </motion.li>
                                                        ))}
                                                    </motion.ul>
                                                </div>
                                            </td> */}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
