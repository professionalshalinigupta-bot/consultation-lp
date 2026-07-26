import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free AI Marketing Consultation | Shalini Gupta",
  description: "Get a customized AI-powered marketing strategy for your business.",
  openGraph: { title: "Free AI Marketing Consultation | Shalini Gupta", description: "Get a customized AI-powered marketing strategy for your business.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
