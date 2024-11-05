import { FaCog, FaInfoCircle, FaLink } from 'react-icons/fa'; // Import icons từ react-icons

function HeaderComponent() {
    return (
        <div className="header flex justify-between items-center mx-10 mt-10 z-[10000] fixed top-0 left-0 right-0 ">
            <button className="flex items-center bg-transparent text-gray-800 hover:bg-gray-200 focus:outline-none py-2 px-4 rounded-lg transition">
                <FaCog className="mr-2" /> {/* Icon cho button */}
                Show Workbench
            </button>
            <button className="flex items-center bg-transparent text-gray-800 hover:bg-gray-200 focus:outline-none py-2 px-4 rounded-lg transition">
                <FaInfoCircle className="mr-2" /> {/* Icon cho button */}
                About
            </button>
            <button className="flex items-center bg-transparent text-gray-800 hover:bg-gray-200 focus:outline-none py-2 px-4 rounded-lg transition">
                <FaLink className="mr-2" /> {/* Icon cho button */}
                Related
            </button>
            <button className="flex items-center bg-transparent text-gray-800 hover:bg-gray-200 focus:outline-none py-2 px-4 rounded-lg transition">
                <FaCog className="mr-2" /> {/* Icon cho button */}
                Show Workbench
            </button>
        </div>
    );
}

export default HeaderComponent;
