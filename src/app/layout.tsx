import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago Cabrera - Full Stack Developer",
  description: "Portfolio de Santiago Cabrera, Full Stack Developer especializado en React, Next.js, Node.js y bases de datos SQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/images/pngwing.com.webp" sizes="any" type="image/webp" />
      </head>
      <body className={`${plusJakartaSans.className} bg-dark-900 text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
} 