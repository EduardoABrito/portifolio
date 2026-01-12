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
  title: "Eduardo Brito | Portfolio",
  description:
    "Portfólio de Eduardo Brito, desenvolvedor Full Stack especializado em TypeScript, React, Next.js e Node.js. Projetos, experiências e tecnologias que utilizo no dia a dia.",

  icons: {
    icon: "/images/avatar.png",
    apple: "/images/avatar.png",
  },

  openGraph: {
    title: "Eduardo Brito | Portfolio",
    description:
      "Conheça o portfólio de Eduardo Brito, desenvolvedor Full Stack com foco em TypeScript, React, Next.js e back-end moderno.",
    url: "https://eduardoabrito.com.br",
    siteName: "Eduardo Brito Portfolio",
    images: [
      {
        url: "/images/avatar.png",
        width: 512,
        height: 512,
        alt: "Eduardo Brito",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eduardo Brito | Portfolio",
    description:
      "Desenvolvedor Full Stack | TypeScript, React, Next.js e Node.js.",
    images: ["/images/avatar.png"],
  },
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
