import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['dejanire-headline', 'Dejanire Headline', ...defaultTheme.fontFamily.sans],
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'wild-bean-dark': '#A03D45',
                'wild-bean-light': '#C67882',
                'page-bg': '#A22B38',
                'promotion-bg': '#FEEBD2',
                'promotion-text': '#A22838',
                'promotion-gray': '#D9D9D9',
                'promotion-green': '#4CAF50',
                'cream': '#EFD8B8',
                'bp-green': '#32702F',
                'ranking-title': '#D8C29C',
                'ranking-active': '#7A1B2D',
                'ranking-badge': '#AE4444',
                'ranking-row-odd': '#F4E9D9',
                'ranking-row-even': '#EBDDC8',
                'ranking-bg': '#F5F5F5',
                'ranking-cloud': '#8B4513',
                'reward-value': '#A22838',
                'tertiary': '#32702F',
            },
        },
    },

    plugins: [forms],
};
