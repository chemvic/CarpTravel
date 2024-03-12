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
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="48x48" />
          {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" /> */}
          <meta name="keywords"
      content="carpatians, mountains, rafting, ballooning, climbing"/>
    <meta property="og:title" content="Uncover Carpathian’s Secrets"/>
    <meta property="og:type" content="website"/>
    <meta property="og:locale" content="en"/>
    <meta property="og:description" content="Internet page of the service for selecting active leisure in the Carpathians"/>
    <meta property="og:url" content=""/>
        </Head>
      <body className="text-white relative body">
        <Header/>
        {children}
      </body>
    </html>
  );
}
