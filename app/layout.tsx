import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAYA AI — AI Sales Assistant. Book More Meetings Now.",
  description:
    "NAYA AI's voice-first sales agents qualify leads, book meetings, and follow up automatically — 24/7. Recover 30%+ of missed leads and double your conversion rate.",
  keywords: "AI sales assistant, voice AI agent, lead qualification, appointment booking, sales automation",
  openGraph: {
    title: "NAYA AI — Book More Meetings with AI",
    description: "Voice-first AI sales agents that qualify leads and book meetings while you sleep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-naya-bg text-naya-text">
        {children}
      </body>
    </html>
  );
}
