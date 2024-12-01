// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    startDate: 'Start Date',
                    endDate: 'End Date',
                    latitudeRange: 'Latitude Range',
                    latitudeStart: 'Latitude Start',
                    latitudeEnd: 'Latitude End',
                    longitudeRange: 'Longitude Range',
                    longitudeStart: 'Longitude Start',
                    longitudeEnd: 'Longitude End',
                    modelName: 'Model Name',
                    uploadArchiveFile: 'Upload Archive File',
                    selectProvine: 'Select Province',
                    selectDistrict: 'Select District',
                    selectWard: 'Select Ward',
                    predict: 'Predict',
                    unsupportedFileType: 'Unsupported file type!',
                    startDateRequired: 'Start Date and End Date are required.',
                    startDateExceedsEndDate: 'Start Date cannot exceed End Date.',
                    latitudeRangeRequired: 'Latitude range is required.',
                    longitudeRangeRequired: 'Longitude range is required.',
                    uploadFileRequired: 'Upload file is required.',
                    cityRequired: 'City is required.',
                },
            },
            vi: {
                translation: {
                    startDate: 'Ngày bắt đầu',
                    endDate: 'Ngày kết thúc',
                    latitudeRange: 'Phạm vi vĩ độ',
                    latitudeStart: 'Bắt đầu vĩ độ',
                    latitudeEnd: 'Kết thúc vĩ độ',
                    longitudeRange: 'Phạm vi kinh độ',
                    longitudeStart: 'Bắt đầu kinh độ',
                    longitudeEnd: 'Kết thúc kinh độ',
                    modelName: 'Tên mô hình',
                    uploadArchiveFile: 'Tải lên tệp nén',
                    selectProvine: 'Chọn tỉnh',
                    selectDistrict: 'Chọn quận/huyện',
                    selectWard: 'Chọn xã/phường',
                    predict: 'Dự đoán',
                    unsupportedFileType: 'Loại tệp không được hỗ trợ!',
                    startDateRequired: 'Ngày bắt đầu và ngày kết thúc là bắt buộc.',
                    startDateExceedsEndDate: 'Ngày bắt đầu không được vượt quá ngày kết thúc.',
                    latitudeRangeRequired: 'Phạm vi vĩ độ là bắt buộc.',
                    longitudeRangeRequired: 'Phạm vi kinh độ là bắt buộc.',
                    uploadFileRequired: 'Tệp tải lên là bắt buộc.',
                    cityRequired: 'Tỉnh là bắt buộc.',
                },
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
