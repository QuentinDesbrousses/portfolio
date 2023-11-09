import type {Config}
from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        colors: {
            'cta': '#B950F2',
            'secondary': '#F2F4F7',
            'd-secondary': '#282C36'
        },
        textColor: {
            'cta': '#B950F2',
            'light': '#DADED3',
            'dark': '#735B51'
        },
        fontSize: {
            'sm': '0.8rem',
            'base': '1rem',
            'xl': '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem'
        },
        extend: {
            opacity: {
                '10': '0.1',
                '20': '0.2',
                '95': '0.95'
            },
            textOpacity: {
                '10': '0.1',
                '20': '0.2',
                '95': '0.95'
            }
        }
    },
    variants: {
        extend: {
            textOpacity: ['active'],
            textColor: ['active']
        }
    },
    plugins: []
}
export default config
