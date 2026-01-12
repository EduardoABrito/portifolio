"use client";

import { ReactNode, Suspense } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { HeroUIProvider } from "@heroui/react";
import { ReactQueryProvider } from "./query-client";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <HeroUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
          <Suspense>{children}</Suspense>
        </NextThemesProvider>
      </HeroUIProvider>
    </ReactQueryProvider>
  );
};
