import type {Config}
from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'cta': '#B950F2',
            'secondary': '#F2F4F7',
            'd-secondary': '#282C36',
            'light': '#DADED3',
            'dark': '#735B51'
        },
        extend: {}
    },
    plugins: []
}
export default config
