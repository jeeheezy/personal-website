import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans, Red_Hat_Display } from "next/font/google";
import NavBar from "@/components/NavBar";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  display: "swap",
  subsets: ["latin"],
});
const redHatDisplay = Red_Hat_Display({
  variable: "--font-redhat",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeeho Lee Portfolio",
  description: "Jeeho's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${redHatDisplay.variable} antialiased min-h-screen bg-black py-5 px-5 sm:px-10 md:px-20 lg:px-24 flex flex-col items-center`}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
