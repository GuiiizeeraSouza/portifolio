import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/_ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Guilherme Souza - Software Engineer & Front-End Developer",
  description: "Portfólio de Guilherme Souza - Especialista em desenvolvimento front-end, criando soluções personalizadas para web e mobile com foco em qualidade, inovação e resultado.",
  icons: {
    icon: "https://media.licdn.com/dms/image/v2/D4D03AQE2SfU9ykZnSg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710873397915?e=1770854400&v=beta&t=2LXZWZQFBlP_5U801Rmv1S51OQaBMheRKoTRHdgppaA",
    apple: "https://media.licdn.com/dms/image/v2/D4D03AQE2SfU9ykZnSg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710873397915?e=1770854400&v=beta&t=2LXZWZQFBlP_5U801Rmv1S51OQaBMheRKoTRHdgppaA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
