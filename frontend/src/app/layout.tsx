import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "PortfolIA",
  description: "Portfólio de projetos de desevolvimento",
};

const fonte = Montserrat({
  subsets: ["latin"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${fonte.className} antialiased`}>{children}
      </body>
    </html>
  );
}
