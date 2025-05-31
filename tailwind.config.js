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
                "text-unpainted": "var(--color-text-unpainted)",
                "text-error": "var(--color-text-error)",
                "bg-main": "var(--color-bg-main)",
                "bg-sub": "var(--color-bg-sub)",
                "bg-code": "var(--color-bg-code)",
                "bg-painted": "var(--color-bg-painted)",
                "border-dark": "var(--color-border-dark)",
                border: "var(--color-border)",
                "border-light": "var(--color-border-light)",
                current: "var(--color-current)",
                "button-primary": "var(--color-button-primary)",
            },
            borderRadius: {
                DEFAULT: "var(--border-radius)",
            },
        },
    },
    plugins: [],
};
