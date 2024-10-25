import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mulish: ["var(--font-mulish)", "system-ui", "sans-serif"],
        didot: ["var(--font-didot)", "system-ui", "sans-serif"],
        didotTitle: ["var(--font-didot-title)", "system-ui", "sans-serif"],
        didotBold: ["var(--font-didot-bold)", "system-ui", "sans-serif"],
        // neueRegradeMedium: ["var(--font-neueRegrade-medium)", "system-ui", "sans-serif"],
        // neueRegradeLight: ["var(--font-neueRegrade-light)", "system-ui", "sans-serif"],
        // neueRegradeBold: ["var(--font-neueRegrade-bold)", "system-ui", "sans-serif"],
        // neueRegradeSemiBold: ["var(--font-neueRegrade-semiBold)", "system-ui", "sans-serif"],
        // grotesk: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        // groteskRegular: ["var(--font-grotesk-regular)", "system-ui", "sans-serif"],
        // groteskMedium: ["var(--font-grotesk-medium)", "system-ui", "sans-serif"],
        // groteskLight: ["var(--font-grotesk-light)", "system-ui", "sans-serif"],
        // groteskBold: ["var(--font-grotesk-bold)", "system-ui", "sans-serif"],
        // groteskBlack: ["var(--font-grotesk-black)", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
