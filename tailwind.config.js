// Define the configuration for Tailwind CSS
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Let Tailwind's `dark:` variant follow the manually-toggled `.dark` class
  // (kept in sync with daisyUI's `data-theme`), instead of only the OS setting.
  darkMode: "class",
  // Configure the DaisyUI plugin for Tailwind CSS
  daisyui: {
    // Use only the two themes defined below
    themes: [
      {
        dark: {
          "primary": "#ffffff",
          "secondary": "#868686",
          "accent": "#494949",
          "neutral": "#131313",
          "base-100": "#1c1c1c",
          "base-200": "#242424",
          "base-300": "#2f2f2f",
          "base-content": "#f5f5f5",
          "info": "#ffffff",
          "success": "#1DB98A",
          "warning": "#FAB561",
          "error": "#EB3A2D",
        },
      },
      {
        // Warm "cream & espresso" light theme
        light: {
          "primary": "#3b2a1a",
          "secondary": "#a68a64",
          "accent": "#e7dcc9",
          "neutral": "#fffaf3",
          "base-100": "#f5f1ea",
          "base-200": "#efe8dd",
          "base-300": "#e2d8c7",
          "base-content": "#2b2420",
          "info": "#3b2a1a",
          "success": "#4E7C59",
          "warning": "#C98A3E",
          "error": "#B3432B",
        },
      },
    ],
    darkTheme: "dark",
  },
  // Specify the files to be processed by PurgeCSS
  content: ["./src/**/*.{html,js}"],
  // Customize the default Tailwind CSS theme
  theme: {
    extend: {},
  },
  // Include the DaisyUI plugin in Tailwind CSS
  plugins: [require("daisyui"), require('@tailwindcss/forms')],
}
