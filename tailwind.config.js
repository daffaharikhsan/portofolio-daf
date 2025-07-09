/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Arahkan Tailwind untuk memindai semua file di dalam folder app
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Menambahkan font kustom Bahnschrift
      fontFamily: {
        sans: ["Bahnschrift", "sans-serif"],
      },
    },
  },
  plugins: [],
};
