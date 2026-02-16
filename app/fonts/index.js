import { Protest_Riot, Poppins, Inter } from "next/font/google";

//protest riot
export const riot = Protest_Riot({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-riot",
});

//Inter
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

//poppins
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});