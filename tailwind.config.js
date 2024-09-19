/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // Các file mà Tailwind sẽ quét để áp dụng các class
    ],
    theme: {
        extend: {
            colors: {
                customBlue: '#0d47a1',
            },
            boxShadow: {
                custom: '0 4px 20px 0 rgba(0,0,0,0.14), 0 7px 10px -5px rgba(13,71,161,0.4)',
            },
        },
    },
    plugins: [],
};
