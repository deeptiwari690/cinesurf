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
        <div className="mx-auto flex max-w-7xl flex-col gap-8 p-4">
          <Header />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
