import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

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
  title: "OM's Bath Fitting",
  description: "Premium Bathroom Fittings & Accessories",
  icons: {
    icon: "/logo.png",
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

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}