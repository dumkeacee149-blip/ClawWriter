import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light cartoon writing vibe
        bg: "#F7FBFF", // page background
        card: "#FFFFFF",
        line: "rgba(15, 23, 42, 0.10)",
        ink: "rgba(15, 23, 42, 0.92)",
        sky: "#38BDF8", // sky blue
        sky2: "#0EA5E9",
        cloud: "#EAF6FF",
        lobster: "#FF4D6D"
      },
      borderRadius: {
        blob: "28px"
      },
      boxShadow: {
        sticker: "0 18px 50px rgba(2, 6, 23, 0.12)",
        glow: "0 0 0 2px rgba(56,189,248,0.18), 0 18px 60px rgba(56,189,248,0.20)"
      }
    }
  },
  plugins: []
} satisfies Config;
