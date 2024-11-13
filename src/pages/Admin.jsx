import React, { useEffect, useState } from 'react';
// import LayerManagement from './LayerManagement';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../index.css';
import axios from 'axios';
import { data } from 'autoprefixer';

const title_table = [
    {
        action: 'Id',
    },
    {
        action: 'Title',
    },
    {
        action: 'Name',
    },
    {
        action: 'Action',
    },
];

function Map() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState();
    const [listLayers, setListLayers] = useState([]);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // useEffect(() => {
    //     axios.post('', (data) => setListLayers(data));
    // }, []);

    return (
        <div className="admin">
            <div className="wrapper flex w-screen bg-[#ededed] ">
                <div className="bg-[#fff] flex-grow relative max-custom:ml-0">
                    {/* <LayerManagement /> */}
                    <div className="flex flex-col items-center justify-center min-h-screen bg-[#536489]">
                        <button
                            className="uppercase font-bold bg-[#1F2739] mb-[40px] text-[#fff] rounded-xl h-[60px] w-auto px-[15px]"
                            onClick={onOpenModal}
                        >
                            add layer to server
                        </button>
                        <Modal open={open} center onClose={onCloseModal}>
                            <div className="uppercase text-center font-bold mb-[25px]">add layers</div>
                            <form className="h-auto align-middle flex flex-col items-center">
                                <input
                                    className="w-[400px] border-[2px] h-[40px] pl-[5px] mb-[15px]"
                                    type="text"
                                    value={name}
                                    onChange={() => {
                                        setName(name);
                                    }}
                                />
                                <input
                                    className="w-[400px] border-[2px] h-[40px] pl-[5px] mb-[15px]"
                                    type="text"
                                    value={name}
                                    onChange={() => {
                                        setName(name);
                                    }}
                                />
                                <input
                                    className="w-[400px] border-[2px] h-[40px] pl-[5px] mb-[15px]"
                                    type="text"
                                    value={name}
                                    onChange={() => {
                                        setName(name);
                                    }}
                                />
                                <div className="flex gap-[20px]">
                                    <button className="uppercase w-[100px] h-[50px] rounded-[7px] bg-[#1F2739] text-[#fff] hover:bg-[#fff] hover:text-[black] hover:shadow-md custom-td-hover">
                                        Submit
                                    </button>
                                    <button
                                        className="uppercase w-[100px] h-[50px] rounded-[7px] bg-[#1F2739] text-[#fff] hover:bg-[#fff] hover:text-[black] hover:shadow-md custom-td-hover"
                                        onClick={onCloseModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </Modal>

                        <table class="container rounded-[20px]">
                            <thead className="rounded-xl">
                                <tr className="odd:bg-[#323C50]">
                                    {title_table.map((item) => {
                                        return (
                                            <th className="pt-[2%] pb-[2%] pl-[2%] bg-[#1F2739] p-2 text-left">
                                                <h1 className="text-[#185875]">{item.action}</h1>
                                            </th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="odd:bg-[#323C50] even:bg-[#2C3446] hover:bg-[#464A52] hover:shadow-md">
                                    <td className="custom-td-hover p-4 text-[#FB667A]">Google</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">9518</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">6369</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">01:32:50</td>
                                </tr>
                                <tr class="odd:bg-[#323C50] even:bg-[#2C3446] hover:bg-[#464A52] hover:shadow-md">
                                    <td className="custom-td-hover p-4 text-[#FB667A]">Twitter</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">7326</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">10437</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">00:51:22</td>
                                </tr>
                                <tr class="odd:bg-[#323C50] even:bg-[#2C3446] hover:bg-[#464A52] hover:shadow-md">
                                    <td className="custom-td-hover p-4 text-[#FB667A]">Amazon</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">4162</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">5327</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">00:24:34</td>
                                </tr>
                                <tr class="odd:bg-[#323C50] even:bg-[#2C3446] hover:bg-[#464A52] hover:shadow-md">
                                    <td className="custom-td-hover p-4 text-[#FB667A]">LinkedIn</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">3654</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">2961</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">00:12:10</td>
                                </tr>
                                <tr class="odd:bg-[#323C50] even:bg-[#2C3446] hover:bg-[#464A52] hover:shadow-md">
                                    <td className="custom-td-hover p-4 text-[#FB667A]">CodePen</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">2002</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">4135</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">00:46:19</td>
                                </tr>
                                <tr class="odd:bg-[#323C50] even:bg-[#2C3446] hover:bg-[#464A52] hover:shadow-md">
                                    <td className="custom-td-hover p-4 text-[#FB667A]">GitHub</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">4623</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">3486</td>
                                    <td className="custom-td-hover p-4 text-[#FB667A]">00:31:52</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
