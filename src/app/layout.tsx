import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "./components/AppWalletProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solburner | burn your Solana tokens here",
  description: "The fastest, easiest, safest, cheapest way to burn Solana tokens you do not need!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <AppWalletProvider>
          {children}
        </AppWalletProvider>
      </body>
      <Script defer src="https://analytics.tokenshit.com/script.js" data-website-id="6474d169-6204-4dfd-b2d3-16a3a8ad5bb2"></Script>
    </html>
  );
}
