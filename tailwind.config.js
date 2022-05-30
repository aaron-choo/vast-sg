// tailwind.config.js
module.exports = {
    purge: [
        './slices/**/*.vue',
        './components/**.vue',
        './layouts/**.vue',
        './pages/**.vue',
        './pages/**/*.vue',
    ],
    theme: {
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};