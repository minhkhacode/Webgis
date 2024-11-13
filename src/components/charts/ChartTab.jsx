import { useState } from 'react';

function ChartTab() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`absolute ${
                isExpanded
                    ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] scale-100'
                    : 'bottom-5 left-5 w-[150px] h-[50px] scale-90'
            } 
            z-[10000] bg-[#3f4854] bg-opacity-90 shadow-lg rounded-lg p-4 transition-all duration-500 ease-in-out`}
            style={{
                transformOrigin: isExpanded ? 'center center' : 'bottom left',
            }}
        >
            <div className="flex justify-between items-center">
                <h2 className="text-white text-lg font-bold">{isExpanded ? 'Selected Charts' : 'Chart'}</h2>
                <button
                    onClick={toggleExpand}
                    className="text-white bg-blue-500 p-1 rounded hover:bg-blue-600 transition duration-200"
                >
                    {isExpanded ? 'Minimize' : 'Expand'}
                </button>
            </div>

            {isExpanded && (
                <div className="mt-4 overflow-auto h-full">
                    {/* Render the selected charts here */}
                    <p className="text-white">Here you can display the selected charts in detail.</p>
                </div>
            )}
        </div>
    );
}

export default ChartTab;
