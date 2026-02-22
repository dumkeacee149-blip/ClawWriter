import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cartoon-ish dark base with playful accents
        bg: "#070A12",
        card: "#0B1022",
        line: "rgba(255,255,255,0.10)",
        ink: "rgba(255,255,255,0.92)",
        mint: "#6EE7B7",
        sky: "#38BDF8",
        lobster: "#FF4D6D",
        med: "#22C55E"
      },
      borderRadius: {
        blob: "28px"
      },
      boxShadow: {
        sticker: "0 14px 40px rgba(0,0,0,0.45)",
        glow: "0 0 0 2px rgba(56,189,248,0.10), 0 0 40px rgba(110,231,183,0.10)"
      }
    }
  },
  plugins: []
} satisfies Config;
