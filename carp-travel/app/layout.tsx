import type { Metadata } from "next";
import Head from 'next/head';

import "./globals.css";
import { Header } from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "CarpTravel",
  description: "Service for organizing travel in the Carpathians",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
          {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" />
        </Head>
      <body className="text-white relative body">
        <Header/>
        {children}
      </body>
    </html>
  );
}
