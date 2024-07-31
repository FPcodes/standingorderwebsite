import type { Metadata } from "next";
import "./globals.css";
import "./page.module.css"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Standing Order Request Website",
  description: "Landing page which allows Westchester Bee-line ParaTransit clients to request a standing order",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM2ckrZ5hOl3qX9pGNSUm6jDjr+lf5u1V21qbs"
          crossOrigin="anonymous"
        />
      </head>
        <body>
          <Header />
            {children}
          <Footer />
        </body>
    </html>
  );
}
