// tailwind.config.js
module.exports = {
    purge: [
        './components/slices/**/*.vue',
        './components/**.vue',
        './layouts/**.vue',
        './pages/**.vue',
        './pages/**/*.vue',
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}