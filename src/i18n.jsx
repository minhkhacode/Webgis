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
                    welcome: 'Welcome to our application',
                    map: 'Map',
                    chart: 'Chart',
                    compare: 'Compare Maps',
                    googleMap: 'Google Map',
                    satelliteMap: 'Satellite Map',
                    streetMap: 'Street Map',
                    titleCTU: 'CTU map project',
                    titleSidebar: 'CTU MAP',
                    titleChar: 'Chart of comparison results between months in Thuan Hoa Soc Trang commune',
                    crs: 'Common Reporting Standard',
                    month: 'Months',
                    year: 'Years',
                    inputPlaceHolder: 'Type something...',
                },
            },
            vi: {
                translation: {
                    welcome: 'Chào mừng bạn đến với ứng dụng của chúng tôi',
                    map: 'Bản đồ',
                    chart: 'Biểu đồ',
                    compare: 'So sánh bản đồ',
                    googleMap: 'Bản đồ Google',
                    satelliteMap: 'Bản đồ vệ tinh',
                    streetMap: 'bản đồ đường sá mở',
                    titleCTU: 'Dự án bản đồ trường ĐHCT',
                    titleSidebar: 'Bản đồ ĐHCT',
                    titleChar: 'Biểu đồ kết quả so sánh giữa các tháng trong xã Thuận Hòa Sóc Trăng',
                    crs: 'Hệ quy chiếu',
                    month: 'Tháng',
                    year: 'Năm',
                    inputPlaceHolder: 'Hay go dieu gi do...',
                },
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
