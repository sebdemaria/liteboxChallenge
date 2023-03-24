/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                aqua: "#64EEBC",
                liteflixGray: "#242424",
                white: {
                    normal: "#ffffff",
                    light: "#ffffffd1",
                    lighter: "#ffffffb8",
                },
            },
            letterSpacing: {
                superWide: "0.2em",
            },
            animation: {
                slideOpenDown: "slideOpenDown 0.5s ease-in-out alternate both",
                slideInBottom: "slideInBottom 1s ease-in-out alternate both",
            },
        },
        fontFamily: {
            bebas: ['"Bebas Neue"', "cursive"],
            oswald: ['"Oswald"', "sans-serif"],
        },
        screens: {
            xs: "20em",
            sm: "30em",
            md: "48em",
            lg: "62em",
            xl: "80em",
            "2xl": "96em",
        },
    },
    plugins: [],
};
