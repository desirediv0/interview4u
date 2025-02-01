import localFont from "next/font/local";
import "./globals.css";
import { raleway } from "@/font";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Interview4u | Expert Technical Interview Services",
  description: "Transform your tech hiring process with Interview4u. Expert-led technical assessments, coding interviews, and comprehensive evaluations for finding top tech talent.",
  keywords: "technical interviews, coding assessments, tech hiring, remote interviews, developer hiring",
  // openGraph: {
  //   title: "Interview4u | Expert Technical Interview Services",
  //   description: "Transform your tech hiring process with Interview4u. Expert-led technical assessments and comprehensive evaluations.",
  //   url: "https://interview4u.in",
  //   siteName: "Interview4u",
  //   images: [
  //     {
  //       url: "/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  twitter: {
    card: "summary_large_image",
    title: "Interview4u | Expert Technical Interview Services",
    description: "Transform your tech hiring process with Interview4u",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#103080",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} bg-white text-black antialiased`}
      >
        <Header />
        {children}
        <div className="py-8"></div>
        <Footer />
      </body>
    </html>
  );
}
