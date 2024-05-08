import { Ubuntu } from "next/font/google";
import { League_Spartan } from "next/font/google";
import { Quicksand } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
const inter = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '700'] })
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] })
const league = League_Spartan({ subsets: ['latin'], weight: ['400', '700'] })
export const metadata = {
  title: "Dra. Gini Pamela Romina",
  description: "La Dra. Gini Pamela Romina es una médica con especialización en Psiquiatría y la salud mental en general.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="zYC6QuJ7sJQK6RD5yFZp5WuLj4HjLa9j2WqN_hkeEjw" />
      </head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${raleway.className}`}>{children}</body>
    </html>
  );
}
