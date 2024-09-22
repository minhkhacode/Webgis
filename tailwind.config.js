/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                customBlue: '#0d47a1',
                textWhite: '#fff',
                textBlack: '#202020',
            },
            boxShadow: {
                custom: '0 4px 20px 0 rgba(0,0,0,0.14), 0 7px 10px -5px rgba(13,71,161,0.4)',
                itemCollapse:
                    '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);',
            },
            screens: {
                'max-custom': { max: '998px' },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
