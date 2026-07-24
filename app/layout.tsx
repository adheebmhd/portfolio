import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "M.R.M Adheeb | Full Stack Developer",
    template: "%s | M.R.M Adheeb",
  },
  description:
    "Portfolio of M.R.M Adheeb, a Full Stack Developer specializing in React, Next.js, Node.js, Express, MySQL and modern web applications.",
  keywords: [
    "M.R.M Adheeb",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Express",
    "MySQL",
    "Portfolio",
    "Sri Lanka",
  ],
  authors: [{ name: "M.R.M Adheeb" }],
  creator: "M.R.M Adheeb",
  openGraph: {
    title: "M.R.M Adheeb | Full Stack Developer",
    description:
      "Explore my portfolio, projects, skills and experience in full-stack web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
