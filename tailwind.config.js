/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                green: "#85B739",
                blue: "#1F90E1",
                "light-blue": "#E0F2FF",
                black: "#161722",
                darky: "#3E3C3C",
                "light-grey": "#7E7B7B",
                "soft-grey": "#E3E2FF",
                "dark-grey": "#577387",
                "light-red": "#FFE3E7",
                ashy: "#567286",
                red: "#FD5F5F",
            },

            aspectRatio: {
                banner: "1.6",
            },

            rotate: {
                145: "145deg",
            },

            borderWidth: {
                1.5: "1.5px",
            },
        },
    },
    plugins: [],
};