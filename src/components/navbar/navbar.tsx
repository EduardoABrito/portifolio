"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";

const links = [
  { href: "/", label: "Sobre" },
  { href: "/resume", label: "Currículo" },
  { href: "/skills", label: "Skills" },
  { href: "/portfolio", label: "Portfólio" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="xl:absolute top-0 right-0 z-50 w-full xl:w-max bg-content2 border border-default p-5 xl:rounded-bl-2xl mb-5 xl:mb-0"
    >
      <ul className="hidden xl:flex items-center gap-6">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-semibold transition-colors ${
                  isActive
                    ? "text-primary-500"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex xl:hidden items-center justify-between">
        <div className="font-bold text-lg">Menu</div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-foreground/70 hover:text-foreground transition"
        >
          <Icon icon={open ? "mdi:close" : "mdi:menu"} className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <ul className="mt-4 flex flex-col gap-4 xl:hidden">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-semibold transition-colors ${
                    isActive
                      ? "text-primary-500"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
