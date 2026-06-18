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
        mono: ['"JetBrains Mono"', 'monospace'],
        courier: ['"Courier New"', 'Courier', 'monospace'],
        roboto: ['"Roboto Mono"', 'monospace'],
        space: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.18)",
      },
      maxWidth: { "62ch": "62ch" },
    },
  },
  plugins: [],
};
