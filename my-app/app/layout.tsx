import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aung Thura - Portfolio",
  description: "A professional full stack developer with over 6 years of experience in building web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
