import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#64DD95", // Your primary color
        secondary: "#1A1A1A",
        primaryText: "#FFFFFF", // Primary text color (for heading)
        secondaryText: "#CECED0", // Secondary text color (for description)
      },
    },
  },
  plugins: [],
} satisfies Config;
