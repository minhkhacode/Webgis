import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { submitInputPrediction } from '../../features/InputMapProperties/inputPredictionSlice';

function InputPrediction({ handleOpenPredictForm }) {
    const { t, i18n } = useTranslation();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isValidForm, setIsValidForm] = useState(true);

    const [citiesList, setCitiesList] = useState([]);
    const [districtsList, setDistrictsList] = useState([]);
    const [wardsList, setwardsList] = useState([]);

    const [selectedCity, setSelectedCity] = useState({});
    const [selectedDistrict, setSelectedDistrict] = useState({});
    const [selectedWard, setSelectedWard] = useState({});

    const dispatch = useDispatch();
    const area = useSelector((state) => state.inputPrediction.area);

    const areaAPI = 'https://esgoo.net/api-tinhthanh';

    useEffect(() => {
        axios.get(`${areaAPI}/1/0.htm`).then((res) => {
            setCitiesList([...res.data.data]);
        });
    }, []);

    useEffect(() => {
        axios.get(`${areaAPI}/2/${selectedCity.id}.htm`).then((res) => {
            setDistrictsList([...res.data.data]);
            setwardsList([]);
        });
    }, [selectedCity]);

    useEffect(() => {
        axios.get(`${areaAPI}/3/${selectedDistrict.id}.htm`).then((res) => {
            setwardsList([...res.data.data]);
        });
    }, [selectedDistrict]);

    const handleSelecCity = (event) => {
        setSelectedCity(event.target.value ? { ...JSON.parse(event.target.value) } : {});
    };

    const handleSelecDistrict = (event) => {
        setSelectedDistrict(event.target.value ? { ...JSON.parse(event.target.value) } : {});
    };

    const handleSelecWard = (event) => {
        const ward = wardsList.filter((ward) => ward.id === event.target.value)[0];
        console.log(ward);
        setSelectedWard(ward ? { ...ward } : {});
    };

    const checkDateValidity = (start, end) => {
        if (start && end) {
            const startDateObj = new Date(start);
            const endDateObj = new Date(end);
            if (startDateObj <= endDateObj) {
                setIsValidForm((prev) => true);
            } else {
                setIsValidForm((prev) => false);
            }
        }
    };

    const handleChangeStartDate = (event) => {
        setStartDate(event.target.value);
    };

    const handleChangeEndDate = (event) => {
        checkDateValidity(startDate, event.target.value);
        if (isValidForm) setEndDate(event.target.value);
    };

    const isEmptyObject = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const area = !isEmptyObject(selectedWard)
            ? selectedWard
            : !isEmptyObject(selectedDistrict)
            ? selectedDistrict
            : !isEmptyObject(selectedCity)
            ? selectedCity
            : null;

        dispatch(
            submitInputPrediction({
                startDate: startDate,
                endDate: endDate,
                modelName: null,
                area,
            }),
        );
        handleOpenPredictForm();
        console.log('Submit');
    };

    const handleCloseForm = (event) => {
        handleOpenPredictForm();
    };

    return (
        <div onClick={handleCloseForm} className="fixed inset-0 z-[10000] bg-black bg-opacity-50">
            <div
                onClick={(event) => event.stopPropagation()}
                className="inputPrediction max-w-lg w-full mx-auto relative top-1/2  transform  -translate-y-1/2 z-[10001]"
            >
                <form className="space-y-4 bg-[#fff] p-6 rounded-lg">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
                                {t('startDate')}
                            </label>
                            <input
                                onChange={handleChangeStartDate}
                                type="date"
                                id="start_date"
                                name="start_date"
                                value={startDate}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">
                                {t('endDate')}
                            </label>
                            <input
                                onChange={handleChangeEndDate}
                                type="date"
                                id="end_date"
                                name="end_date"
                                value={endDate}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="model_name" className="block text-sm font-medium text-gray-700">
                            {t('modelName')}
                        </label>
                        <select
                            id="model_name"
                            name="model_name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="model1">Model 1</option>
                            <option value="model2">Model 2</option>
                            <option value="model3">Model 3</option>
                            <option value="model4">Model 4</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                {t('selectProvine')}
                            </label>
                            <select
                                id="city"
                                name="city"
                                onChange={handleSelecCity}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                <option value="">-- {t('selectProvine')} --</option>
                                {citiesList.map((city) => (
                                    <option key={city.id} value={JSON.stringify(city)}>
                                        {i18n.language === 'en' ? city.full_name_en : city.full_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                                {t('selectDistrict')}
                            </label>
                            <select
                                id="district"
                                name="district"
                                onChange={handleSelecDistrict}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                <option value="">-- {t('selectDistrict')} --</option>
                                {districtsList.map((district) => (
                                    <option key={district.id} value={JSON.stringify(district)}>
                                        {i18n.language === 'en' ? district.full_name_en : district.full_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="ward" className="block text-sm font-medium text-gray-700">
                                {t('selectWard')}
                            </label>
                            <select
                                id="ward"
                                name="ward"
                                onChange={handleSelecWard}
                                value={selectedWard.id}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                <option value="">-- {t('selectWard')} --</option>
                                {wardsList.map((ward) => (
                                    <option key={ward.id} value={ward.id}>
                                        {i18n.language === 'en' ? ward.full_name_en : ward.full_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            {t('predict')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InputPrediction;
