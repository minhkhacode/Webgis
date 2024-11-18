import { CiSearch } from 'react-icons/ci';
import { IoMdCloudDownload, IoIosCloseCircleOutline } from 'react-icons/io';
import { MdUpload } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarStatus, toggleSidebar } from '../../features/setting/settingSlice';

function Sidebar() {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectSidebarStatus);
    return (
        <div
            className={` relative h-screen bg-gray-800 text-white flex flex-col  transition-all duration-300  top-0 ${
                isOpen ? 'p-4 w-[400px] left-[0]' : 'w-[0] p-0 left-[-100%] pointer-events-none '
            }`}
        >
            <div className="close absolute top-2 right-2" onClick={() => dispatch(toggleSidebar())}>
                <IoIosCloseCircleOutline className="text-2xl cursor-pointer" />
            </div>

            <div className="flex items-center mb-8 mt-4">
                <img
                    className="w-12 h-12 mr-4"
                    src="https://upload.wikimedia.org/wikipedia/vi/thumb/6/6c/Logo_Dai_hoc_Can_Tho.svg/2048px-Logo_Dai_hoc_Can_Tho.svg.png"
                    alt="CTU Logo"
                />
                <h1 className="text-xl font-bold text-gray-200">CSIROBoeing Vietnam </h1>
            </div>

            <div className="flex items-center bg-gray-700 pl-3 py-2 rounded-2xl mb-6">
                <CiSearch className="text-white text-xl" />
                <input
                    type="text"
                    className="mx-3 bg-transparent text-white flex-grow placeholder-gray-400 focus:outline-none"
                    placeholder="Search..."
                />
            </div>

            <div className="flex items-center space-x-3">
                <button className="flex items-center justify-center bg-teal-500 text-white w-full py-1 rounded-xl hover:bg-teal-400 focus:outline-none">
                    <IoMdCloudDownload className="mr-2 text-xl" />
                    Save
                </button>
                <button className="flex items-center justify-center bg-teal-500 text-white w-full py-1 rounded-xl hover:bg-teal-400 focus:outline-none">
                    <MdUpload className="mr-2 text-xl" />
                    Upload
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
