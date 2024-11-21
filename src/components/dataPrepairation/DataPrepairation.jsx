import { useState } from 'react';

function DataPrepairation() {
    const [currentStep, setCurrentStep] = useState(1); // Keeps track of the current step
    const steps = [
        { label: 'Step 1: Data Upload', description: 'Upload your data files.' },
        { label: 'Step 2: Preprocessing', description: 'Prepare the data for prediction.' },
        { label: 'Step 3: Prediction', description: 'Run the prediction model.' },
    ];

    // Images for the data
    const images = [
        {
            label: 'VH data',
            imgSrc: 'https://www.esa.int/var/esa/storage/images/applications/observing_the_earth/copernicus/sentinel-1/19716934-11-eng-GB/Sentinel-1_pillars.jpg',
        },
        {
            label: 'VV data',
            imgSrc: 'https://www.esa.int/var/esa/storage/images/applications/observing_the_earth/copernicus/sentinel-1/19716934-11-eng-GB/Sentinel-1_pillars.jpg',
        },
        {
            label: 'NDVI data',
            imgSrc: 'https://www.esa.int/var/esa/storage/images/applications/observing_the_earth/copernicus/sentinel-1/19716934-11-eng-GB/Sentinel-1_pillars.jpg',
        },
        {
            label: 'Free cloud NDVI',
            imgSrc: 'https://www.esa.int/var/esa/storage/images/applications/observing_the_earth/copernicus/sentinel-1/19716934-11-eng-GB/Sentinel-1_pillars.jpg',
        },
    ];

    const handlePrevClick = () => {
        setCurrentStep((prevStep) => (prevStep === 1 ? steps.length : prevStep - 1));
    };

    const handleNextClick = () => {
        setCurrentStep((prevStep) => (prevStep === steps.length ? 1 : prevStep + 1));
    };

    // Create the dots based on the current step
    const renderDots = () => {
        return steps.map((_, index) => (
            <span
                key={index}
                className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ease-in-out ${
                    index + 1 === currentStep ? 'bg-blue-600' : 'bg-gray-400 hover:bg-blue-500'
                }`}
            ></span>
        ));
    };

    return (
        <div className="fixed inset-0 z-[10000] bg-black bg-opacity-50">
            <div
                onClick={(event) => event.stopPropagation()}
                className="inputPrediction max-w-lg w-full mx-auto relative top-1/2 transform -translate-y-1/2 z-[10001] bg-[#fff] p-6 rounded-lg space-y-4"
            >
                {/* Navigation buttons for steps */}
                <div className="flex justify-between items-center">
                    <button
                        onClick={handlePrevClick}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700"
                    >
                        Prev
                    </button>
                    <div className="flex items-center justify-center">{renderDots()}</div>{' '}
                    {/* Show dots between buttons */}
                    <button
                        onClick={handleNextClick}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700"
                    >
                        Next
                    </button>
                </div>

                {/* Current step description */}
                <div className="text-center py-4">
                    <h3 className="text-lg font-bold">{steps[currentStep - 1].label}</h3>
                    <p>{steps[currentStep - 1].description}</p>
                </div>

                {/* Show VH and VV images in the same row */}
                <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-2">Sentinel 1 data</h4>
                    <div className="flex justify-between space-x-4">
                        <div className="flex-1">
                            <span className="block text-center">{images[0].label}</span>
                            <img
                                src={images[0].imgSrc}
                                alt={images[0].label}
                                className="mt-2 w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <span className="block text-center">{images[1].label}</span>
                            <img
                                src={images[1].imgSrc}
                                alt={images[1].label}
                                className="mt-2 w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Show NDVI and additional image on a separate row */}
                <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-2">Sentinel 2 data</h4>
                    <div className="flex justify-between mt-4 space-x-4">
                        <div className="flex-1">
                            <span className="block text-center">{images[2].label}</span>
                            <img
                                src={images[2].imgSrc}
                                alt={images[2].label}
                                className="mt-2 w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <span className="block text-center">{images[3].label}</span>
                            <img
                                src={images[3].imgSrc}
                                alt={images[3].label}
                                className="mt-2 w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataPrepairation;
