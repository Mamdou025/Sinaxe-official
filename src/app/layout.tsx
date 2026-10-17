import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Switzer-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sinaxe - Turning data into decisions",
  description:
    "Sinaxe turns complex tax work into structured, auditable, AI-assisted workflows.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${switzer.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {/* Single shared gradient def, referenced via fill: url(#sinaxe-icon-gradient)
            by every .gradient-icon instance — SVG gradient refs resolve
            document-wide, so one definition here is enough for the whole app. */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
          <defs>
            <linearGradient
              id="sinaxe-icon-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5e1f9e" />
              <stop offset="100%" stopColor="#f0530f" />
            </linearGradient>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
