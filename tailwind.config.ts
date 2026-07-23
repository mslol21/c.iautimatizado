import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0D0D0D",
        surfaceLight: "#161618",
        surfaceBorder: "rgba(255, 255, 255, 0.08)",
        electricBlue: "#00F0FF",
        deepBlue: "#1E40AF",
        neonPurple: "#8B5CF6",
        softPurple: "#A855F7",
        silver: "#E2E8F0",
        slateMuted: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.25), rgba(255, 255, 255, 0))',
        'blue-purple-glow': 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glass-glow': 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
