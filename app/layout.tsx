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
      url: '/public/assets/icons/favicon-dark.ico',
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/x-icon',
    },
    {
      url: '/public/assets/icons/favicon-light.ico',
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/x-icon',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://carp-travel-beryl.vercel.app/',
    title: 'CarpTravel',
    description: 'Service for organizing travel in the Carpathians',
    siteName: 'Uncover Carpathian’s Secrets',
    images: [{ url: '/public/assets/ogp/carpatians.jpg' }, { url: '/public/assets/ogp/carpatians.png' }],
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
