export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#E6EDF4",
        fg: "#122654",
        border: "#DAE0E9",
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        anka: ['Anka Coder', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        quote: ['"Arial MT Pro"', 'Arial', 'sans-serif'],
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,.06)" },
      maxWidth: { "62ch": "62ch" },
    },
  },
  plugins: [],
};
