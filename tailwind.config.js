/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "background": "#272727",
                "background2": "#202020",
                "app-border": "#242424",
                "app-min-max-hover": "#5a5a5a",
                "app-min-max-active": "#787878",
                "app-close-hover": "#e81123",
                "app-close-active": "#f1707a",
                "nav-button-hover": "#2b2b2b",
                "page-border": "#1c1c1c",
            }
        }
    },
    plugins: [
        require("@tailwindcss/typography")
    ],
};
