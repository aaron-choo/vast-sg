// tailwind.config.js
module.exports = {
    purge: [
        './slices/**/*.vue',
        './components/**.vue',
        './layouts/**.vue',
        './pages/**.vue',
        './pages/**/*.vue',
    ],
    safelist: [
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
        'grid-cols-6',
        {
            pattern: /grid-cols-(2|3|4|5|6)/,
            variants: ['lg'],
        }
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
        extend: {
            transitionDelay: {
                '400': '400ms',
                '600': '600ms',
                '700': '700ms',
                '800': '800ms',
                '900': '900ms',
                '1100': '1100ms',
                '1200': '1200ms',
            },
            spacing: {
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '29': '7.25rem',
                '30': '7.5rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};