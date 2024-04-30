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
  description: "La Dra. Gini Pamela Romina es una médica ontológica con especialización en Psiquiatría y la salud mental en general.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./images/Pamela.jpg" type="image/x-icon" />
      <body className={`${raleway.className}`}>{children}</body>
    </html>
  );
}
