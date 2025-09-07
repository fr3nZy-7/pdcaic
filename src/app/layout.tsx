import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import FloatingButtons from "@/components/common/FloatingButtons";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway", 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Padmanaabh Dental Clinic and Implant Centre - Expert Dental Care",
  description: "Professional dental care services including Root canal treatments, implants, orthodontics, cosmetic dentistry, and general dental treatments. Expert dental specialists with state-of-the-art technology.",
  keywords: "Root canal, Endodontics, dental clinic, dental implants, orthodontics, cosmetic dentistry, root canal, dental care, dentist, oral health, teeth whitening, dental surgery",
  authors: [{ name: "Padmanaabh Dental Clinic" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Padmanaabh Dental Clinic and Implant Centre",
    description: "Expert dental care with state-of-the-art technology and experienced specialists.",
    type: "website",
    locale: "en_US",
    siteName: "Padmanaabh Dental Clinic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      <body className="font-poppins antialiased bg-white text-gray-900">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <FloatingButtons />
      </body>
    </html>
  );
}