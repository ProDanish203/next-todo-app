import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3c2c59",
        secondary: "#c7bbdd",
        tertiary: "#151030",
        accent: "#5d4389",
        text: "#150f1f",
        background: "#e3ddee",
      },
      screens: {
        xsm: "550px",
        xs: "450px",
      }
    },
  },
  plugins: [],
}
export default config
