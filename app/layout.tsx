import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "CarpTravel",
  description: "Service for organizing travel in the Carpathians",
  keywords: ["carpatians", "mountains", "rafting", "ballooning", "climbing"],
  metadataBase: new URL('https://carp-travel-beryl.vercel.app/'),
  icons: [
    {
      url: '/icons/favicon-dark.svg',
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/svg',
    },
    {
      url: '/icons/favicon-light.svg',
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/svg',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://carp-travel-beryl.vercel.app/',
    title: 'CarpTravel',
    description: 'Service for organizing travel in the Carpathians',
    siteName: 'Uncover Carpathian’s Secrets',
    images: [{ url: '/ogp/carpatians.jpg' }, { url: '/ogp/carpatians.png' }],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="text-white relative body">
        <Header/>
        {children}
      </body>
    </html>
  );
}
