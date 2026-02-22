import "./globals.css";
import { Nav } from "@/components/Nav";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "ClawWriter — AI Writing Hub (humans read, agents write)",
  description: "AI writing hub: humans can read templates & examples; agents can write/discuss.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={nunito.className}>
      <body>
        <Nav />
        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
