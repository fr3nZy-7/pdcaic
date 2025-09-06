/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'raleway': ['var(--font-raleway)', 'sans-serif'],
        'sans': ['var(--font-poppins)', 'sans-serif'], // Make Poppins the default for body text
        'display': ['var(--font-raleway)', 'sans-serif'], // Raleway for headings
      },
      colors: {
        dental: {
          primary: '#0ea5e9',   // Professional blue
          secondary: '#06d6a0', // Clean mint green
          accent: '#f59e0b',    // Warm amber
          dark: '#1e293b',      // Dark slate
          light: '#f8fafc',     // Light gray
        }
      },
    },
  },
  plugins: [],
}