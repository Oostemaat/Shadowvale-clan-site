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
      <body className="bg-[#08090b] text-zinc-100 antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}