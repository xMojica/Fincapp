/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            boxShadow: {
                header: "0px 5px 40px 20px #59507e", // Cambia los valores según tus necesidades
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
