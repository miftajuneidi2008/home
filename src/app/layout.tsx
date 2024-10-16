import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { inter } from "./fonts/font";

export const metadata: Metadata = {
  title: "birra home rent and sale",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full w-[100vw] antialiased`}>
        <main className="flex min-h-screen w-full flex-col">
          <Navbar />
          <div className="flex-1 flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
