import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CricketHub.pro",
  description: "Experience the thrill of every cricket match with live scores, comprehensive match statistics, player profiles, and in-depth analysis on CricketHub.pro Stay updated with the latest news, highlights, and expert insights into your favorite teams and players. Whether it's international fixtures, domestic tournaments, or the excitement of T20 leagues, our platform delivers the most accurate and up-to-date cricket information. Join thousands of cricket enthusiasts and immerse yourself in the world of cricket like never before on CricketHub.pro.",
  other: {
    "google-site-verification" : "sVdN8Q1bz1KwTehC2WzKpxZCSttbZ3yjKeD1lTwCIck",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
