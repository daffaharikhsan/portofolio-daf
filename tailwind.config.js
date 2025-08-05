/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Arahkan Tailwind untuk memindai semua file di dalam folder app
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Menambahkan font kustom Bahnschrift
      fontFamily: {
        sans: ["Bahnschrift", "sans-serif"],
      },
      backgroundImage: {
        "wavy-underline":
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 12'%3e%3cpath d='M 0 8 Q 50 0 100 8' stroke='%2338bdf8' fill='none' stroke-width='3' stroke-linecap='round'/%3e%3c/svg%3e\")",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
