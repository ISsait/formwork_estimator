import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formwork Estimator",
  description: "Created to help you estimate the cost of formwork for your projects.",
  icons: {
    icon: "/formwork_logo.svg",            // default 32×32
    shortcut: "/formwork_logo.svg",
    other: [
      { rel: "apple-touch-icon", url: "/formwork_logo.svg" },
      { rel: "icon", url: "/formwork_logo.svg", type: "image/svg+xml" },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
