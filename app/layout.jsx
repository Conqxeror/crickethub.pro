import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CricketHub.pro",
  description: "Get live scores, stats, player profiles, & analysis on CricketHub.pro. Stay updated on international, domestic, & T20 matches. Join thousands of fans!",
  other: {
    "google-site-verification" : "sVdN8Q1bz1KwTehC2WzKpxZCSttbZ3yjKeD1lTwCIck",
  },
  openGraph: {
    title: 'CricketHub.pro',
    description: 'Get live scores, stats, player profiles, & analysis on CricketHub.pro. Stay updated on international, domestic, & T20 matches. Join thousands of fans!',
    url: 'https://crickethub-pro.vercel.app',
    siteName: 'CricketHub.pro',
    images: [
      {
        url: './opengraph-image.jpg',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
