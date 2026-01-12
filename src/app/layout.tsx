import type { Metadata } from "next";
import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import { Providers } from "@/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Eduardo Brito - Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
