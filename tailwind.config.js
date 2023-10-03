/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      minWidth: {
        '30%': '30%',
        '15%': '15%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "color-scheme": "dark",
          "primary": "#38bdf8",
          "secondary": "#818CF8",
          "accent": "#F471B5",
          "neutral": "#1E293B",
          "neutral-focus": "#273449",
          "base-100": "#0F172A",
          "info": "#0CA5E9",
          "info-content": "#000000",
          "success": "#2DD4BF",
          "warning": "#F4BF50",
          "error": "#FB7085",
        }
      },
      {
        light: {
          "color-scheme": "light",
          "primary": "#570df8",
          "secondary": "#f000b8",
          "accent": "#c4b5fd",
          "neutral": "#2b3440",
          "base-100": "#e0f2fe",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      }
    ]
  }
}

