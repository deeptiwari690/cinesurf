import type { Metadata } from "next";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "CineSurf",
  description: "Discover movies and TV shows",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
