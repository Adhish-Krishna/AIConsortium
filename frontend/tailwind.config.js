/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'ai-cyan': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        'ai-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        "fade-in": "fadeIn 1.5s ease-in-out forwards",
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        tilt: "tilt 10s infinite linear",
        breathe: "breathe 3s ease-in-out infinite",
        ripple: "ripple 2.5s ease-out infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(2deg)",
          },
          "75%": {
            transform: "rotate(-2deg)",
          },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 0,
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "neural-pattern": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cstyle%3E.node %7B fill: %232563eb; opacity: 0.1; %7D .line %7B stroke: %232563eb; stroke-width: 0.5; opacity: 0.1; %7D%3C/style%3E%3Ccircle class='node' cx='20' cy='20' r='3'/%3E%3Ccircle class='node' cx='50' cy='20' r='3'/%3E%3Ccircle class='node' cx='80' cy='20' r='3'/%3E%3Ccircle class='node' cx='20' cy='50' r='3'/%3E%3Ccircle class='node' cx='50' cy='50' r='3'/%3E%3Ccircle class='node' cx='80' cy='50' r='3'/%3E%3Ccircle class='node' cx='20' cy='80' r='3'/%3E%3Ccircle class='node' cx='50' cy='80' r='3'/%3E%3Ccircle class='node' cx='80' cy='80' r='3'/%3E%3Cline class='line' x1='20' y1='20' x2='50' y2='20'/%3E%3Cline class='line' x1='50' y1='20' x2='80' y2='20'/%3E%3Cline class='line' x1='20' y1='20' x2='20' y2='50'/%3E%3Cline class='line' x1='20' y1='50' x2='20' y2='80'/%3E%3Cline class='line' x1='20' y1='80' x2='50' y2='80'/%3E%3Cline class='line' x1='50' y1='80' x2='80' y2='80'/%3E%3Cline class='line' x1='80' y1='80' x2='80' y2='50'/%3E%3Cline class='line' x1='80' y1='50' x2='80' y2='20'/%3E%3Cline class='line' x1='20' y1='20' x2='50' y2='50'/%3E%3Cline class='line' x1='50' y1='20' x2='50' y2='50'/%3E%3Cline class='line' x1='80' y1='20' x2='50' y2='50'/%3E%3Cline class='line' x1='20' y1='80' x2='50' y2='50'/%3E%3Cline class='line' x1='50' y1='80' x2='50' y2='50'/%3E%3Cline class='line' x1='80' y1='80' x2='50' y2='50'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow': '0 0 10px rgba(37, 99, 235, 0.5), 0 0 20px rgba(37, 99, 235, 0.3)',
        'glow-cyan': '0 0 15px rgba(14, 165, 233, 0.6), 0 0 30px rgba(14, 165, 233, 0.4)',
        'glow-purple': '0 0 15px rgba(168, 85, 247, 0.6), 0 0 30px rgba(168, 85, 247, 0.4)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
