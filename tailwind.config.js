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
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,.06)" },
      maxWidth: { "62ch": "62ch" },
    },
  },
  plugins: [],
};
