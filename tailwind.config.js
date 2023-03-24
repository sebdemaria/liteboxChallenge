/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./screens/**/*.{js,jsx}",
        "./templates/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                aqua: "#64EEBC",
                liteflixGray: {
                    normal: "#242424",
                    light: "#464646",
                    transparent: "rgba(36, 36, 36, 0.5)",
                    borderTransparent: "rgba(255, 255, 255, 0.5)",
                },
                white: {
                    normal: "#ffffff",
                    light: "#ffffffd1",
                    lighter: "#ffffffb8",
                },
            },
            letterSpacing: {
                superWide: "4px",
            },
            animation: {
                slideOpenDown: "slideOpenDown 0.5s ease-in-out alternate both",
                slideInBottom: "slideInBottom 1s ease-in-out alternate both",
            },
        },
        fontFamily: {
            bebas: ['"Bebas Neue"', "sans-serif"],
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
