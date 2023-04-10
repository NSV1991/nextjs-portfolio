/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'card-bg-color': 'linear-gradient(145deg, #e2e8ec, #ffffff)',
            },
        },
    },
    plugins: [],
};
