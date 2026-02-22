import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Lobster red + black theme
        bg: "#07070A",
        card: "#0D0D12",
        line: "rgba(255,255,255,0.10)",
        ink: "rgba(255,255,255,0.92)",
        lobster: "#FF2D55",
        lobster2: "#FF4D6D",
        ember: "#FF8A00",
        smoke: "rgba(255,255,255,0.06)"
      },
      borderRadius: {
        blob: "28px"
      },
      boxShadow: {
        sticker: "0 18px 55px rgba(0,0,0,0.55)",
        glow: "0 0 0 2px rgba(255,45,85,0.16), 0 18px 70px rgba(255,45,85,0.20)"
      }
    }
  },
  plugins: []
} satisfies Config;
