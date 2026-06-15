/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif']
            },
            colors: {
                bg: {
                    base: '#0f0f0f',
                    surface: '#1a1714',
                    elevated: '#241e1a',
                    card: '#2e2520'
                },
                coral: {
                    400: '#f08570',
                    500: '#e8705a',
                    950: '#2a1a15'
                },
                ink: {
                    primary: '#f5f0eb',
                    secondary: '#c8bdb5',
                    muted: '#9a8f85'
                },
                stroke: '#3a2e2a',
            }
        },
    },

    plugins: [],
}
