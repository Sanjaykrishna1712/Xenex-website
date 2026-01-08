import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  variable: "--font-racing",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "XENEX - We don't modify cars. We create characters.",
  description: "Premium car transformation and cinematic builds. Crafting characters, not just modifications.",
  icons: {
    icon: '/xenex-xdrive-logo.jpeg',
    shortcut: '/xenex-xdrive-logo.jpeg',
    apple: '/xenex-xdrive-logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="antialiased bg-xenex-dark">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

