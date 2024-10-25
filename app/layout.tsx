import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { mulish, didot, didotTitle, didotBold } from '@/styles/fonts';
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Travelsy",
  description: "Find an experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${didot.variable} ${didotTitle.variable} ${didotBold.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
