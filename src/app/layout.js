import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.cpbathfittingmanufacturer.com"), 
  title: "OM's Bath | Best CP Bath Fitting Manufacturer in Delhi",
  description: "OM's Bath is a trusted CP Bath Fitting Manufacturer in Delhi. ISO 9001:2015 certified, 20+ years experience, 500+ products. Get best prices for dealers & builders.",
  alternates: {
    canonical: "/", // is page ka canonical path
  },
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "YARNWMktKAnUV7Q8CoBV9BV-ysC6i1UxOA3oU8riyAI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable}`}
    >
      <body className="font-body bg-black">
        
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main>
          {children}
        </main>
        <FloatingWhatsApp/>
        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}