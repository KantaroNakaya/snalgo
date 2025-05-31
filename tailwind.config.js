/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "text-main": "var(--color-text-main)",
                "text-sub": "var(--color-text-sub)",
                "text-error": "var(--color-text-error)",
                "bg-main": "var(--color-bg-main)",
                "bg-sub": "var(--color-bg-sub)",
                "bg-code": "var(--color-bg-code)",
                "border-dark": "var(--color-border-dark)",
                "border-light": "var(--color-border-light)",
                "button-primary": "var(--color-button-primary)",
                "current": "var(--color-current)",
            },
            borderRadius: {
                DEFAULT: "var(--border-radius)",
            },
        },
    },
    plugins: [],
};
