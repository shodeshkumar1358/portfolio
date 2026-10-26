import { Geist_Mono, Montserrat } from "next/font/google";
import { siteUrl } from "@/data/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shodesh Kumar | MERN Stack Developer & Web Developer",
    template: "%s — Shodesh Kumar",
  },
  description:
    "Explore the portfolio of Shodesh Kumar, a web developer working with React.js, Next.js, TypeScript, Node.js, and MongoDB. Discover projects, technical skills, and development experience.",
  applicationName: "Shodesh Kumar Portfolio",
  openGraph: {
    type: "website",
    title: "Shodesh Kumar | MERN Stack Developer & Web Developer",
    description:
      "Explore projects, technical skills, and development experience from Shodesh Kumar, a web developer working with React.js, Next.js, TypeScript, Node.js, and MongoDB.",
    siteName: "Shodesh Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shodesh Kumar | MERN Stack Developer & Web Developer",
    description:
      "Explore projects, technical skills, and development experience from Shodesh Kumar, a web developer working with React.js, Next.js, TypeScript, Node.js, and MongoDB.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
