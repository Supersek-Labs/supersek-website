/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                primary: "#FFFFFF",
                secondary: "#86868b",
                accent: "#6366f1",
            },
            fontFamily: {
                headline: ["'Space Grotesk'", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            letterSpacing: {
                wide: "0.1em",
            },
        },
    },
    plugins: [],
}
