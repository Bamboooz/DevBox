/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "background": "var(--background)",
                "background2": "var(--background2)",
                "app-border": "var(--app-border)",
                "app-min-max-hover": "var(--app-min-max-hover)",
                "app-min-max-active": "var(--app-min-max-active)",
                "app-close-hover": "var(--app-close-hover)",
                "app-close-active": "var(--app-close-active)",
                "nav-button-hover": "var(--nav-button-hover)",
                "nav-button-active": "var(--nav-button-active)",
                "page-border": "var(--page-border)",
                "page-item": "var(--page-item)",
            },
        }
    },
    plugins: [
        require("@tailwindcss/typography")
    ],
};
