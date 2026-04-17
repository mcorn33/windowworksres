import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "WindowWorksResidential | Premium Window Cleaning Central Iowa",
  description:
    "Residential window cleaning in Elkhart, Ankeny, Des Moines, Altoona, Bondurant, Huxley & nearby. Streak-free glass, fully insured, satisfaction guarantee.",
  keywords: [
    "window cleaning",
    "residential window cleaning",
    "Elkhart Iowa",
    "Ankeny",
    "Des Moines",
    "Altoona",
    "Bondurant",
    "Huxley",
    "Central Iowa",
  ],
  metadataBase: new URL("https://windowworksres.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans bg-[#0d1f2d] text-slate-200 antialiased">{children}</body>
    </html>
  );
}
