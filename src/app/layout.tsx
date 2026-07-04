import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Shadowvale",
  description: "Forged Through PvM. Built Through Community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0f1115] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}