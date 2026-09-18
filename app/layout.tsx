import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "B.E. Classics — Guaranteed Booked Appointments for Auto Shops",
  description:
    "B.E. Classics builds targeted Google & Facebook ad campaigns that fill auto repair shops with booked appointments. No long-term contracts, transparent ROI.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased">
        <Nav />
        {children}
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9DX4XY4P3H" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9DX4XY4P3H');
          `}
        </Script>
      </body>
    </html>
  );
}
